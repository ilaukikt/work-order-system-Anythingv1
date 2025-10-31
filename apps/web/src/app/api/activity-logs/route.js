import { supabase } from "@/app/api/utils/supabase";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 50;
    const entityType = searchParams.get("entity_type");
    const activityType = searchParams.get("activity_type");

    const offset = (page - 1) * limit;

    let query = supabase
      .from("activity_logs")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (entityType) {
      query = query.eq("entity_type", entityType);
    }

    if (activityType) {
      query = query.eq("activity_type", activityType);
    }

    const { data: activityLogs, error, count } = await query;

    if (error) throw error;

    return Response.json({
      activityLogs,
      pagination: {
        page,
        limit,
        total: count || 0,
        totalPages: Math.ceil((count || 0) / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching activity logs:", error);
    return Response.json(
      { error: "Failed to fetch activity logs", details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const {
      activity_type,
      entity_type,
      entity_id,
      description,
      details = {},
      user_name = "System User",
      user_email,
    } = data;

    if (!activity_type || !entity_type || !entity_id || !description) {
      return Response.json(
        {
          error:
            "Missing required fields: activity_type, entity_type, entity_id, description",
        },
        { status: 400 }
      );
    }

    const { data: activityLog, error } = await supabase
      .from("activity_logs")
      .insert({
        activity_type,
        entity_type,
        entity_id,
        description,
        metadata: details,
        performed_by: user_name,
      })
      .select()
      .single();

    if (error) throw error;

    return Response.json({
      activityLog,
      message: "Activity logged successfully",
    });
  } catch (error) {
    console.error("Error creating activity log:", error);
    return Response.json(
      { error: "Failed to create activity log", details: error.message },
      { status: 500 }
    );
  }
}
