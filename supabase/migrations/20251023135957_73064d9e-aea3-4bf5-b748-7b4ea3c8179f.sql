-- Create storage bucket for project media
INSERT INTO storage.buckets (id, name, public) 
VALUES ('project-media', 'project-media', true);

-- Create projects table
CREATE TABLE public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  logo_url TEXT,
  youtube_url TEXT,
  vimeo_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create project_media table for additional photos
CREATE TABLE public.project_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  media_url TEXT NOT NULL,
  media_type TEXT DEFAULT 'image',
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_media ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Public read access for portfolio viewing
CREATE POLICY "Projects are viewable by everyone"
  ON public.projects
  FOR SELECT
  USING (true);

CREATE POLICY "Project media is viewable by everyone"
  ON public.project_media
  FOR SELECT
  USING (true);

-- Storage policies for public access
CREATE POLICY "Project media is publicly accessible"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'project-media');

-- Indexes for performance
CREATE INDEX idx_projects_order ON public.projects(display_order);
CREATE INDEX idx_project_media_project_id ON public.project_media(project_id);
CREATE INDEX idx_project_media_order ON public.project_media(project_id, display_order);

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();