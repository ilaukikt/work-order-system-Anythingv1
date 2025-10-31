import { supabase } from "@/app/api/utils/supabase";
import {
  logActivity,
  createWorkOrderActivity,
} from "@/app/api/utils/activityLogger";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");

    let query = supabase
      .from("work_orders")
      .select(`
        id, wo_number, date, vendor_name, site_name,
        total_amount, net_amount, status, created_at,
        companies:company_id (company_name)
      `)
      .order("created_at", { ascending: false });

    if (search && search.trim()) {
      query = query.or(
        `wo_number.ilike.%${search.trim()}%,vendor_name.ilike.%${search.trim()}%,site_name.ilike.%${search.trim()}%`
      );
    }

    const { data: workOrders, error } = await query;

    if (error) throw error;

    const sanitizedWorkOrders = workOrders.map((wo) => ({
      id: wo.id || null,
      wo_number: wo.wo_number || "N/A",
      date: wo.date || null,
      vendor_name: wo.vendor_name || "N/A",
      site_name: wo.site_name || "N/A",
      total_amount: wo.total_amount || 0,
      net_amount: wo.net_amount || 0,
      status: wo.status || "Draft",
      created_at: wo.created_at || new Date().toISOString(),
      company_name: wo.companies?.company_name || null,
    }));

    return Response.json({
      success: true,
      workOrders: sanitizedWorkOrders,
    });
  } catch (error) {
    console.error("Error fetching work orders:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to fetch work orders",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    const required = [
      "company_id",
      "vendor_name",
      "site_name",
      "work_description",
      "total_amount",
    ];

    const missingFields = required.filter(
      (field) =>
        !data[field] ||
        (typeof data[field] === "string" && !data[field].trim())
    );

    if (missingFields.length > 0) {
      return Response.json(
        {
          success: false,
          error: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const totalAmount = parseFloat(data.total_amount);
    if (isNaN(totalAmount) || totalAmount <= 0) {
      return Response.json(
        {
          success: false,
          error: "Total amount must be a positive number",
        },
        { status: 400 }
      );
    }

    const { data: company } = await supabase
      .from("companies")
      .select("id")
      .eq("id", data.company_id)
      .maybeSingle();

    if (!company) {
      return Response.json(
        {
          success: false,
          error: "Invalid company ID",
        },
        { status: 400 }
      );
    }

    const hasGst = data.has_gst !== false;
    const retentionPercent = Math.max(
      0,
      Math.min(100, parseFloat(data.retention_percent || 0))
    );

    const sgstPercent = hasGst
      ? Math.max(0, Math.min(50, parseFloat(data.sgst_percent || 9)))
      : 0;
    const cgstPercent = hasGst
      ? Math.max(0, Math.min(50, parseFloat(data.cgst_percent || 9)))
      : 0;
    const sgstAmount = (totalAmount * sgstPercent) / 100;
    const cgstAmount = (totalAmount * cgstPercent) / 100;
    const grossAmount = totalAmount + sgstAmount + cgstAmount;
    const retentionAmount = (grossAmount * retentionPercent) / 100;
    const netAmount = grossAmount - retentionAmount;

    let woNumber = data.wo_number;
    if (!woNumber || !woNumber.trim()) {
      try {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();

        const vendorShort =
          (data.vendor_name || "")
            .replace(/[^a-zA-Z]/g, "")
            .substring(0, 8)
            .toUpperCase() || "VENDOR";
        const siteShort =
          (data.site_name || "")
            .replace(/[^a-zA-Z]/g, "")
            .substring(0, 5)
            .toUpperCase() || "SITE";

        const { count } = await supabase
          .from("work_orders")
          .select("*", { count: "exact", head: true })
          .gte("created_at", new Date().toISOString().split("T")[0]);

        const sequence = String((count || 0) + 1).padStart(2, "0");
        woNumber = `W.O.${dd}${mm}${yyyy}-PBPL-${siteShort}-${vendorShort}-${sequence}`;
      } catch (genError) {
        console.error("Error generating WO number:", genError);
        woNumber = `WO-${Date.now()}`;
      }
    }

    const { data: duplicate } = await supabase
      .from("work_orders")
      .select("id")
      .eq("wo_number", woNumber)
      .maybeSingle();

    if (duplicate) {
      return Response.json(
        {
          success: false,
          error: "Work order number already exists",
        },
        { status: 400 }
      );
    }

    const { data: workOrder, error } = await supabase
      .from("work_orders")
      .insert({
        wo_number: woNumber,
        date: data.date || new Date().toISOString().split("T")[0],
        company_id: data.company_id,
        vendor_name: data.vendor_name?.trim() || "",
        vendor_contact: data.vendor_contact?.trim() || "",
        vendor_address: data.vendor_address?.trim() || "",
        vendor_gst: data.vendor_gst?.trim() || "",
        site_name: data.site_name?.trim() || "",
        project_description: data.project_description?.trim() || "",
        work_description: data.work_description?.trim() || "",
        total_amount: totalAmount,
        has_gst: hasGst,
        sgst_percent: sgstPercent,
        cgst_percent: cgstPercent,
        sgst_amount: sgstAmount,
        cgst_amount: cgstAmount,
        gross_amount: grossAmount,
        retention_percent: retentionPercent,
        retention_amount: retentionAmount,
        net_amount: netAmount,
        payment_terms: data.payment_terms?.trim() || "",
        vendor_bank_name: data.vendor_bank_name?.trim() || "",
        vendor_bank_account: data.vendor_bank_account?.trim() || "",
        vendor_bank_ifsc: data.vendor_bank_ifsc?.trim() || "",
        status: data.status?.trim() || "Draft",
      })
      .select()
      .single();

    if (error) throw error;

    try {
      const activityData = createWorkOrderActivity(
        workOrder.id,
        workOrder,
        "Admin User"
      );
      await logActivity(activityData);
    } catch (logError) {
      console.error("Error logging activity:", logError);
    }

    return Response.json({
      success: true,
      workOrder,
    });
  } catch (error) {
    console.error("Error creating work order:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to create work order",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
