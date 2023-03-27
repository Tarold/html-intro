CREATE DATABASE phones_sales;
-- Create users table
CREATE TABLE users (
id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
tel VARCHAR(20) NOT NULL UNIQUE
);

-- Create phones table
CREATE TABLE phones (
id SERIAL PRIMARY KEY,
model VARCHAR(50) NOT NULL,
color VARCHAR(20) NOT NULL,
cost DECIMAL(10,2) NOT NULL
);

-- Create shopping table
CREATE TABLE shopping (
id SERIAL PRIMARY KEY,
user_id INT NOT NULL REFERENCES users(id),
phone_id INT NOT NULL REFERENCES phones(id),
date DATE NOT NULL
);

-- Insert data into users table
INSERT INTO users (first_name, last_name, email, tel) VALUES
('John', 'Doe', 'johndoe@gmail.com', '555-1234'),
('Jane', 'Doe', 'janedoe@gmail.com', '555-5678'),
('Bob', 'Smith', 'bobsmith@gmail.com', '555-9876');

-- Insert data into phones table
INSERT INTO phones (model, color, cost) VALUES
('iPhone 12', 'Black', 999.99),
('Galaxy S21', 'White', 899.99),
('Pixel 5', 'Green', 799.99);

-- Insert data into shopping table
INSERT INTO shopping (user_id, phone_id, date) VALUES
(1, 2, '2021-09-01'),
(1, 1, '2021-09-02'),
(2, 3, '2021-09-03'),
(3, 1, '2021-09-04'),
(3, 2, '2021-09-05');