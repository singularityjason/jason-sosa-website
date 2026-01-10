-- Delete the duplicate entries (the ones created at 05:50:24)
DELETE FROM project_media 
WHERE id IN (
  '084d74bf-a71e-4fb2-ae79-000e904c2f7f',
  '5551cba7-294b-4c0f-9dc5-4f95bcfce28c',
  'd7ae37b5-77ae-4bd8-81f4-708d3ad13c1b',
  'de5cc612-0698-40f7-af7c-196e7c92aa3f',
  '33bcdf9e-eb86-4d2d-9a7e-7fa513141b69',
  '6924ab76-c4a8-4b42-ac9a-0ba518ceee01'
);