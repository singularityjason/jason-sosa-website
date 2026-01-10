
-- Update project title
UPDATE projects 
SET title = 'First Homemade Multi-touch Wall 2009'
WHERE id = 'e8f9d5c1-4a2b-4c3d-9e1f-2a3b4c5d6e7f';

-- Remove multitouch-wall-1.jpg
DELETE FROM project_media 
WHERE id = '1abd6571-0b73-4f3f-8c21-72ba91d49c9a';

-- Remove duplicate media entries (keep first occurrence of each)
DELETE FROM project_media 
WHERE id IN (
  '6f19aab7-4de3-4cb3-a267-e5e69167675b',  -- duplicate multitouch-wall-5.jpg
  '4f041dd6-377f-4547-9b79-3a597700d255',  -- duplicate multitouch-wall-6.jpg
  'b4aa64b3-9669-4978-9fd0-b5226b3659b7',  -- duplicate multitouch-wall-7.jpg
  '06f3d33f-ab1c-4c27-82fb-a3d9dd1d2ba9'   -- duplicate multitouch-wall-8.jpg
);