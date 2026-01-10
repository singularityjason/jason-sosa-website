-- Create admin_users table for managing who can access the admin panel
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  role TEXT DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  is_active BOOLEAN DEFAULT true
);

-- Enable RLS
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Everyone can check if they're an admin (needed for login check)
CREATE POLICY "Users can check their own admin status"
  ON public.admin_users
  FOR SELECT
  USING (true);

-- Only existing admins can insert new admins
CREATE POLICY "Admins can insert new admins"
  ON public.admin_users
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE email = auth.jwt() ->> 'email'
      AND is_active = true
    )
  );

-- Only existing admins can update admin records
CREATE POLICY "Admins can update admin records"
  ON public.admin_users
  FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE email = auth.jwt() ->> 'email'
      AND is_active = true
    )
  );

-- Only existing admins can delete admin records (but not themselves)
CREATE POLICY "Admins can delete other admins"
  ON public.admin_users
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.admin_users
      WHERE email = auth.jwt() ->> 'email'
      AND is_active = true
    )
    AND email != auth.jwt() ->> 'email'
  );

-- Insert the first admin (you!)
INSERT INTO public.admin_users (email, name, role)
VALUES ('jason@element1.ai', 'Jason Sosa', 'super_admin')
ON CONFLICT (email) DO NOTHING;
