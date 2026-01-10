-- Remove duplicate images from Activesite | Artprize 2009 project
-- Keeping the earlier entries and removing the later duplicates

DELETE FROM project_media 
WHERE id IN (
  'bfacefbc-ba0e-4788-b260-914aacbeefcb',
  '8141be4b-0774-400a-b83c-9ae847087b1a',
  'bd60784d-f82f-4882-8564-4a37210d3cfb',
  '436f6af8-b9f1-4f27-a7e2-9508df7b5474',
  '974f822b-f93f-4a91-b20f-4204e5b33bf7',
  'dc73f53d-44ff-4c4c-960d-e3f6f0f4acdf'
);