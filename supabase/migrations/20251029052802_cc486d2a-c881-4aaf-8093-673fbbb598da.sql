-- Add preview_media_url column to projects table
ALTER TABLE projects ADD COLUMN IF NOT EXISTS preview_media_url text;

-- Set the preview image for Activesite | Artprize 2009 project
UPDATE projects 
SET preview_media_url = 'https://44868819-4c32-4877-9e6a-c3e0cc01b976.lovableproject.com/projects/activesite/activesitegirlhands-scaled.jpg'
WHERE title = 'Activesite | Artprize 2009';