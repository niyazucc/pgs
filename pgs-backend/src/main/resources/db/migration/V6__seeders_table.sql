INSERT INTO users (name, email, password, role) VALUES
( 'Alice Customer', 'customer@gmail.com', '123456', 'CUSTOMER'),
( 'Bob Vendor', 'vendor@gmail.com', '123456', 'VENDOR'),
( 'Charlie Admin', 'admin@gmail.com', '123456', 'ADMIN');

-- Insert into vendors table
INSERT INTO vendors (user_id, business_name, location, status) VALUES
( 2, 'Bob\'s Services', 'New York', 'APPROVED'),
( 2, 'Bob\'s Cleaning', 'San Francisco', 'PENDING');

-- Insert into services table
INSERT INTO services ( vendor_id, service_name, price, description) VALUES
( 1, 'House Cleaning', 100.00, 'Comprehensive cleaning service for homes.'),
( 1, 'Office Cleaning', 200.00, 'Professional office cleaning services.');

-- Insert into appointments table
INSERT INTO appointments (cust_id, vendor_id, service_id, date_time, status) VALUES
(1, 1, 1, '2025-02-08 10:00:00', 'PENDING'),
(1, 1, 2, '2025-02-09 14:00:00', 'CONFIRMED');

-- Insert into reviews table
INSERT INTO reviews ( user_id, vendor_id, rating, comment) VALUES
( 1, 1, 5, 'Excellent service!'),
( 1, 1, 4, 'Great cleaning, but a bit late.');