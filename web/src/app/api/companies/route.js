import sql from "@/app/api/utils/sql";

// GET - List all companies
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");

    let query = `
      SELECT 
        id, company_name, address, contact_person, contact_number, gst_number,
        bank_name, account_number as bank_account_number, ifsc_code as bank_ifsc,
        created_at, updated_at
      FROM companies
    `;

    let params = [];

    if (search && search.trim()) {
      query += ` WHERE 
        LOWER(COALESCE(company_name, '')) LIKE LOWER($1) OR 
        LOWER(COALESCE(contact_person, '')) LIKE LOWER($1) OR
        LOWER(COALESCE(gst_number, '')) LIKE LOWER($1)
      `;
      params.push(`%${search.trim()}%`);
    }

    query += ` ORDER BY company_name ASC`;

    const companies = await sql(query, params);

    // Ensure all companies have required properties
    const sanitizedCompanies = companies.map((company) => ({
      id: company.id || null,
      company_name: company.company_name || "N/A",
      address: company.address || "",
      contact_person: company.contact_person || "",
      contact_number: company.contact_number || "",
      gst_number: company.gst_number || "",
      bank_name: company.bank_name || "",
      bank_account_number: company.bank_account_number || "",
      bank_ifsc: company.bank_ifsc || "",
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
      { status: 500 },
    );
  }
}

// POST - Create new company
export async function POST(request) {
  try {
    const data = await request.json();

    // Validate required fields
    const required = ["company_name"];
    const missingFields = [];

    for (const field of required) {
      if (
        !data[field] ||
        (typeof data[field] === "string" && !data[field].trim())
      ) {
        missingFields.push(field);
      }
    }

    if (missingFields.length > 0) {
      return Response.json(
        {
          success: false,
          error: `Missing required fields: ${missingFields.join(", ")}`,
        },
        { status: 400 },
      );
    }

    // Check for duplicate GST number if provided
    if (data.gst_number && data.gst_number.trim()) {
      const existing = await sql`
        SELECT id FROM companies WHERE gst_number = ${data.gst_number.trim()}
      `;

      if (existing.length > 0) {
        return Response.json(
          {
            success: false,
            error: "Company with this GST number already exists",
          },
          { status: 400 },
        );
      }
    }

    // Check for duplicate company name
    const existingName = await sql`
      SELECT id FROM companies WHERE LOWER(company_name) = LOWER(${data.company_name.trim()})
    `;

    if (existingName.length > 0) {
      return Response.json(
        {
          success: false,
          error: "Company with this name already exists",
        },
        { status: 400 },
      );
    }

    const result = await sql`
      INSERT INTO companies (
        company_name, address, contact_person, contact_number, gst_number,
        bank_name, account_number, ifsc_code,
        city, state, pincode
      ) VALUES (
        ${data.company_name?.trim() || ""}, 
        ${data.address?.trim() || ""}, 
        ${data.contact_person?.trim() || ""}, 
        ${data.contact_number?.trim() || ""}, 
        ${data.gst_number?.trim() || ""}, 
        ${data.bank_name?.trim() || ""}, 
        ${data.bank_account_number?.trim() || ""}, 
        ${data.bank_ifsc?.trim() || ""},
        ${data.city?.trim() || ""}, 
        ${data.state?.trim() || ""}, 
        ${data.pincode?.trim() || ""}
      ) RETURNING *
    `;

    return Response.json({
      success: true,
      company: result[0],
    });
  } catch (error) {
    console.error("Error creating company:", error);
    return Response.json(
      {
        success: false,
        error: "Failed to create company",
        details: error.message,
      },
      { status: 500 },
    );
  }
}
