-- Insert Activesite | Artprize 2009 project
INSERT INTO public.projects (
  title,
  description,
  category,
  client_name,
  project_date,
  tags,
  featured,
  display_order
) VALUES (
  'Activesite | Artprize 2009',
  '103-inch custom-made laser multi-touch wall in collaboration with Haworth R&D for furnishings.',
  'Interactive Installation',
  'Haworth R&D',
  '2009-09-01',
  ARRAY['multi-touch', 'interactive', 'installation', 'artprize', 'laser'],
  true,
  1
)
RETURNING id;

-- Insert project media for Activesite
-- Note: Replace 'PROJECT_ID' with the actual project ID after insertion
WITH project_id AS (
  SELECT id FROM public.projects WHERE title = 'Activesite | Artprize 2009' LIMIT 1
)
INSERT INTO public.project_media (project_id, media_url, media_type, display_order)
SELECT 
  project_id.id,
  media_url,
  'image',
  display_order
FROM project_id, (VALUES
  ('/projects/activesite/activesitegirlhands-scaled.jpg', 1),
  ('/projects/activesite/2009-09-18_12.41.26.jpg', 2),
  ('/projects/activesite/2009-09-22_08.47.19.jpg', 3),
  ('/projects/activesite/2009-09-22_09.20.35.jpg', 4)
) AS media(media_url, display_order);