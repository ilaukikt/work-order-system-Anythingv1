// Note: You'll need to install @supabase/supabase-js package
// Run: npm install @supabase/supabase-js

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dboqykyyyuoyekzdhxlm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRib3F5a3l5eXVveWVremRoeGxtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3MjAyODEsImV4cCI6MjA3NzI5NjI4MX0.BnRCh3sJqoZY9eU713lMLQVgFLdElbSnVFb57oDRVac'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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