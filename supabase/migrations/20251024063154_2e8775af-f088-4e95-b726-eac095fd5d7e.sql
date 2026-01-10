-- Add new fields to projects table for better filtering and sorting
ALTER TABLE public.projects
ADD COLUMN category text,
ADD COLUMN featured boolean DEFAULT false,
ADD COLUMN project_date date,
ADD COLUMN client_name text,
ADD COLUMN tags text[];

-- Create index for common queries
CREATE INDEX idx_projects_category ON public.projects(category);
CREATE INDEX idx_projects_featured ON public.projects(featured);
CREATE INDEX idx_projects_date ON public.projects(project_date DESC);
CREATE INDEX idx_projects_tags ON public.projects USING gin(tags);