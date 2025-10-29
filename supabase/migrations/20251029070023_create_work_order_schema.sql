-- Work Order Management System Schema
-- Creates tables for companies, vendors, work orders, and activity logs

-- 1. Companies Table
CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  address text DEFAULT '',
  contact_person text DEFAULT '',
  contact_number text DEFAULT '',
  gst_number text DEFAULT '',
  bank_name text DEFAULT '',
  account_number text DEFAULT '',
  ifsc_code text DEFAULT '',
  city text DEFAULT '',
  state text DEFAULT '',
  pincode text DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 2. Vendors Table
CREATE TABLE IF NOT EXISTS vendors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vendor_name text NOT NULL,
  vendor_type text DEFAULT 'Service Provider',
  contact_person text DEFAULT '',
  contact_number text NOT NULL,
  email text DEFAULT '',
  address text DEFAULT '',
  gst_number text DEFAULT '',
  pan_number text DEFAULT '',
  bank_name text DEFAULT '',
  bank_account_number text DEFAULT '',
  bank_ifsc text DEFAULT '',
  default_retention_percent numeric DEFAULT 0,
  status text DEFAULT 'Active',
  created_from text DEFAULT 'Manual',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 3. Work Orders Table
CREATE TABLE IF NOT EXISTS work_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  wo_number text UNIQUE NOT NULL,
  date date DEFAULT CURRENT_DATE,
  company_id uuid REFERENCES companies(id),
  vendor_name text DEFAULT '',
  vendor_contact text DEFAULT '',
  vendor_address text DEFAULT '',
  vendor_gst text DEFAULT '',
  site_name text DEFAULT '',
  project_description text DEFAULT '',
  work_description text DEFAULT '',
  total_amount numeric DEFAULT 0,
  has_gst boolean DEFAULT true,
  sgst_percent numeric DEFAULT 9,
  cgst_percent numeric DEFAULT 9,
  sgst_amount numeric DEFAULT 0,
  cgst_amount numeric DEFAULT 0,
  gross_amount numeric DEFAULT 0,
  retention_percent numeric DEFAULT 0,
  retention_amount numeric DEFAULT 0,
  net_amount numeric DEFAULT 0,
  payment_terms text DEFAULT '',
  vendor_bank_name text DEFAULT '',
  vendor_bank_account text DEFAULT '',
  vendor_bank_ifsc text DEFAULT '',
  status text DEFAULT 'Draft',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 4. Activity Logs Table
CREATE TABLE IF NOT EXISTS activity_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  activity_type text NOT NULL,
  entity_type text DEFAULT '',
  entity_id uuid,
  description text DEFAULT '',
  performed_by text DEFAULT 'System',
  metadata jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Create Indexes for Performance
CREATE INDEX IF NOT EXISTS idx_work_orders_company_id ON work_orders(company_id);
CREATE INDEX IF NOT EXISTS idx_work_orders_status ON work_orders(status);
CREATE INDEX IF NOT EXISTS idx_work_orders_created_at ON work_orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_activity_logs_entity ON activity_logs(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_vendors_status ON vendors(status);

-- Enable Row Level Security
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE work_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

-- Create Public Access Policies (Allow all operations for now)
-- Note: These should be refined based on authentication requirements

CREATE POLICY "Allow public read access to companies"
  ON companies FOR SELECT
  USING (true);

CREATE POLICY "Allow public insert to companies"
  ON companies FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public update to companies"
  ON companies FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public delete from companies"
  ON companies FOR DELETE
  USING (true);

CREATE POLICY "Allow public read access to vendors"
  ON vendors FOR SELECT
  USING (true);

CREATE POLICY "Allow public insert to vendors"
  ON vendors FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public update to vendors"
  ON vendors FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public delete from vendors"
  ON vendors FOR DELETE
  USING (true);

CREATE POLICY "Allow public read access to work_orders"
  ON work_orders FOR SELECT
  USING (true);

CREATE POLICY "Allow public insert to work_orders"
  ON work_orders FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public update to work_orders"
  ON work_orders FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Allow public delete from work_orders"
  ON work_orders FOR DELETE
  USING (true);

CREATE POLICY "Allow public read access to activity_logs"
  ON activity_logs FOR SELECT
  USING (true);

CREATE POLICY "Allow public insert to activity_logs"
  ON activity_logs FOR INSERT
  WITH CHECK (true);