import { supabase } from "@/app/api/utils/supabase";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const vendorType = searchParams.get("vendor_type");
    const status = searchParams.get("status");

    let query = supabase
      .from("vendors")
      .select("*")
      .order("created_at", { ascending: false });

    if (search && search.trim()) {
      query = query.or(
        `vendor_name.ilike.%${search.trim()}%,contact_number.ilike.%${search.trim()}%,contact_person.ilike.%${search.trim()}%`
      );
    }

    if (vendorType && vendorType !== "All") {
      query = query.eq("vendor_type", vendorType);
    }

    if (status && status !== "All") {
      query = query.eq("status", status);
    }

    const { data: vendors, error } = await query;

    if (error) throw error;

    return Response.json({
      success: true,
      vendors,
    });
  } catch (error) {
    console.error("Error fetching vendors:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to fetch vendors",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.vendor_name || !data.vendor_type || !data.contact_number) {
      return Response.json(
        {
          success: false,
          error: "Missing required fields: vendor_name, vendor_type, contact_number",
        },
        { status: 400 }
      );
    }

    const validVendorTypes = ["Service Provider", "Contractor"];
    if (!validVendorTypes.includes(data.vendor_type)) {
      return Response.json(
        {
          success: false,
          error: "Invalid vendor type. Must be Service Provider or Contractor",
        },
        { status: 400 }
      );
    }

    const retentionPercent = Number(data.default_retention_percent || 0);
    if (![0, 5, 10].includes(retentionPercent)) {
      return Response.json(
        {
          success: false,
          error: "Invalid retention percentage. Must be 0, 5, or 10",
        },
        { status: 400 }
      );
    }

    const status = data.status || "Active";
    if (!["Active", "Inactive"].includes(status)) {
      return Response.json(
        {
          success: false,
          error: "Invalid status. Must be Active or Inactive",
        },
        { status: 400 }
      );
    }

    const { data: vendor, error } = await supabase
      .from("vendors")
      .insert({
        vendor_name: data.vendor_name?.trim(),
        vendor_type: data.vendor_type,
        contact_person: data.contact_person?.trim() || "",
        contact_number: data.contact_number?.trim(),
        email: data.email?.trim() || "",
        address: data.address?.trim() || "",
        gst_number: data.gst_number?.trim() || "",
        pan_number: data.pan_number?.trim() || "",
        bank_name: data.bank_name?.trim() || "",
        bank_account_number: data.bank_account_number?.trim() || "",
        bank_ifsc: data.bank_ifsc?.trim() || "",
        default_retention_percent: retentionPercent,
        status: status,
        created_from: data.created_from || "Manual",
      })
      .select()
      .single();

    if (error) {
      if (error.message.includes("duplicate key")) {
        return Response.json(
          {
            success: false,
            error: "Vendor with this name already exists",
          },
          { status: 409 }
        );
      }
      throw error;
    }

    return Response.json({
      success: true,
      vendor,
    });
  } catch (error) {
    console.error("Error creating vendor:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to create vendor",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
