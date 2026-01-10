-- Remove duplicate portfolio projects, keeping the ones with more content

-- Delete duplicate Cyborgs & Society entry (no media)
DELETE FROM projects WHERE id = '20b14b66-d570-4b36-b146-63b6334b6faf';

-- Delete duplicate experiments entry (no category, no media)
DELETE FROM projects WHERE id = '98cb1e21-48c6-4068-a15b-1f3f2c17b10e';

-- Delete duplicate Brian Kelly podcast entries (less specific titles)
DELETE FROM projects WHERE id IN (
  '4badfea7-ecd5-423e-a0c6-942b60b12b87',
  '76dc2f78-6a04-4618-8c1e-d1ae7ef7dd2d'
);

-- Also delete Brian Kelly Interview duplicate
DELETE FROM projects WHERE id = '54114e14-c0f1-427c-b8d6-f047f8a01a2e';