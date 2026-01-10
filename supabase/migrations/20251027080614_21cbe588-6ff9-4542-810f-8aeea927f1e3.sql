-- Delete duplicate media entries for Robert Scoble project (keep the earlier ones)
DELETE FROM project_media 
WHERE id IN (
  '6de4ef40-f5ec-4ff8-a6ec-7c913ca83b2e',
  'c5317e3f-85ae-42a8-bf16-227f4a66502a',
  '807639bf-93b0-401f-ac3e-72ac3df14b11'
);