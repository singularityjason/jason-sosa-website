-- Update the title for the Multi-touch Walls project
UPDATE projects 
SET title = 'Early Experiments Building Multi-Touch Walls 2010',
    updated_at = now()
WHERE title = 'Multi-touch Walls';