import { supabase } from "@/app/api/utils/supabase";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");

    let query = supabase
      .from("companies")
      .select("*")
      .order("company_name", { ascending: true });

    if (search && search.trim()) {
      query = query.or(
        `company_name.ilike.%${search.trim()}%,contact_person.ilike.%${search.trim()}%,gst_number.ilike.%${search.trim()}%`
      );
    }

    const { data: companies, error } = await query;

    if (error) throw error;

    const sanitizedCompanies = companies.map((company) => ({
      id: company.id || null,
      company_name: company.company_name || "N/A",
      address: company.address || "",
      contact_person: company.contact_person || "",
      contact_number: company.contact_number || "",
      gst_number: company.gst_number || "",
      bank_name: company.bank_name || "",
      bank_account_number: company.account_number || "",
      bank_ifsc: company.ifsc_code || "",
      created_at: company.created_at || new Date().toISOString(),
      updated_at: company.updated_at || new Date().toISOString(),
    }));

    return Response.json({
      success: true,
      companies: sanitizedCompanies,
    });
  } catch (error) {
    console.error("Error fetching companies:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to fetch companies",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.company_name || !data.company_name.trim()) {
      return Response.json(
        {
          success: false,
          error: "Missing required fields: company_name",
        },
        { status: 400 }
      );
    }

    if (data.gst_number && data.gst_number.trim()) {
      const { data: existing } = await supabase
        .from("companies")
        .select("id")
        .eq("gst_number", data.gst_number.trim())
        .maybeSingle();

      if (existing) {
        return Response.json(
          {
            success: false,
            error: "Company with this GST number already exists",
          },
          { status: 400 }
        );
      }
    }

    const { data: existingName } = await supabase
      .from("companies")
      .select("id")
      .ilike("company_name", data.company_name.trim())
      .maybeSingle();

    if (existingName) {
      return Response.json(
        {
          success: false,
          error: "Company with this name already exists",
        },
        { status: 400 }
      );
    }

    const { data: company, error } = await supabase
      .from("companies")
      .insert({
        company_name: data.company_name?.trim() || "",
        address: data.address?.trim() || "",
        contact_person: data.contact_person?.trim() || "",
        contact_number: data.contact_number?.trim() || "",
        gst_number: data.gst_number?.trim() || "",
        bank_name: data.bank_name?.trim() || "",
        account_number: data.bank_account_number?.trim() || "",
        ifsc_code: data.bank_ifsc?.trim() || "",
        city: data.city?.trim() || "",
        state: data.state?.trim() || "",
        pincode: data.pincode?.trim() || "",
      })
      .select()
      .single();

    if (error) throw error;

    return Response.json({
      success: true,
      company,
    });
  } catch (error) {
    console.error("Error creating company:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to create company",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
