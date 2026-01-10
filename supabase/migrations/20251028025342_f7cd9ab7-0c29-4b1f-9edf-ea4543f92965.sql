-- Remove duplicate Vimeo video entries from Cara project
-- Keep only the first entry (display_order = 0) and delete the duplicates
DELETE FROM project_media 
WHERE project_id = 'f5c0b1aa-b5a7-4c34-b258-5135c316057f' 
AND media_type = 'video' 
AND media_url = 'https://vimeo.com/81716640'
AND id IN ('c6ba2ad1-5f56-42e5-86c6-9581d40bea67', '4343c911-23a6-4922-959c-c7e4d39a8b3d');