INSERT INTO shopping_list (name, price, category, checked, date_added)
VALUES 
('Fish tricks', 13.10, 'Main',    false,  now() - '21 days'::INTERVAL),
('Not Dogs', 4.99, 'Snack',       true,   now() - '21 days'::INTERVAL),
('Bluffalo Wings', 5.50, 'Snack', false,  now() - '21 days'::INTERVAL);