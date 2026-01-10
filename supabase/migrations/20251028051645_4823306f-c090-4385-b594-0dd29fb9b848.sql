-- Recategorize projects as requested

-- Move Bitcoin Orchestrator and Azara AI Agents to Technology & Innovation
UPDATE projects 
SET category = 'Technology & Innovation'
WHERE id IN (
  '25284588-0635-473a-ade3-9bb53aa0d137',
  '9380c51b-ef42-4ddb-a8ab-fde7bfd338fb'
);

-- Move Featured Quote to Media category
UPDATE projects 
SET category = 'Media'
WHERE id = '09f3ec0d-f823-48b3-90a9-3d042c5758e4';