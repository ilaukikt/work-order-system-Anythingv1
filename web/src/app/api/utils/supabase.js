// Note: You'll need to install @supabase/supabase-js package
// Run: npm install @supabase/supabase-js

import { createClient } from '@supabase/supabase-js'

// These environment variables need to be set in your project
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY // Use service role key for server-side operations

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables')
}

// Create Supabase client for server-side operations
export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Helper function to handle Supabase responses
export const handleSupabaseResponse = (response) => {
  if (response.error) {
    console.error('Supabase error:', response.error)
    throw new Error(response.error.message)
  }
  return response.data
}

// Helper function to build query with filters
export const buildQuery = (table, filters = {}) => {
  let query = supabase.from(table).select('*')
  
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      if (key.includes('search')) {
        // Handle search operations
        const searchFields = value.fields || []
        const searchTerm = value.term || ''
        if (searchTerm && searchFields.length > 0) {
          const orConditions = searchFields.map(field => `${field}.ilike.%${searchTerm}%`).join(',')
          query = query.or(orConditions)
        }
      } else if (key.includes('range')) {
        // Handle range operations
        query = query.gte(value.field, value.from).lte(value.field, value.to)
      } else {
        // Handle exact match
        query = query.eq(key, value)
      }
    }
  })
  
  return query
}

export default supabase