CREATE DATABASE test;

CREATE TABLE students (
id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
birthday DATE CHECK (birthday <= CURRENT_DATE - INTERVAL '18 years') NOT NULL,
phone_number CHAR(13) CHECK (phone_number LIKE '+380_________') NOT NULL,
group_code VARCHAR(10) NOT NULL,
avg_mark NUMERIC(3,2) NOT NULL,
gender CHAR(1) NOT NULL,
entered_at SMALLINT CHECK (entered_at <= EXTRACT(YEAR FROM CURRENT_DATE)) NOT NULL,
department VARCHAR(50) NOT NULL,
UNIQUE(phone_number)
);

-- wrong birthday data
INSERT INTO students (first_name, last_name, birthday, phone_number, group_code, avg_mark, gender, entered_at, department)
VALUES
('John', 'Doe', '2020-05-01', '+380992223344', '101', 4.7, 'M', 2021, 'Computer Science');

-- wrong entered_at data
INSERT INTO students (first_name, last_name, birthday, phone_number, group_code, avg_mark, gender, entered_at, department)
VALUES
('John', 'Doe', '2000-05-01', '+380992223344', '101', 4.7, 'M', 2025, 'Computer Science');

-- wrong number data
INSERT INTO students (first_name, last_name, birthday, phone_number, group_code, avg_mark, gender, entered_at, department)
VALUES
('John', 'Doe', '2000-05-01', '+381992223344', '101', 4.7, 'M', 2025, 'Computer Science');

-- Insert test data
INSERT INTO students (first_name, last_name, birthday, phone_number, group_code, avg_mark, gender, entered_at, department)
VALUES
('John', 'Doe', '1999-05-01', '+380992223344', '101', 4.7, 'M', 2021, 'Computer Science'),
('Jane', 'Doe', '2000-01-30', '+380943334455', '102', 4.5, 'F', 2020, 'Computer Science'),
('Max', 'Mustermann', '1998-12-15', '+380914445566', '101', 4.0, 'M', 2019, 'Electrical Engineering'),
('Anna', 'Smith', '1999-08-08', '+380925556677', '102', 4.9, 'F', 2020, 'Computer Science'),
('Peter', 'Müller', '2001-03-20', '+380926667788', '103', 4.2, 'M', 2020, 'Electrical Engineering'),
('Lisa', 'Schneider', '2002-06-10', '+380937778899', '102', 4.8, 'F', 2021, 'Mechanical Engineering'),
('Tom', 'Taylor', '1999-11-25', '+380978889900', '103', 4.3, 'M', 2019, 'Computer Science'),
('Emily', 'Brown', '2000-05-03', '+380979990000', '102', 4.7, 'F', 2021, 'Electrical Engineering'),
('William', 'Wilson', '1999-07-14', '+380941111222', '102', 4.4, 'M', 2019, 'Mechanical Engineering'),
('Olivia', 'Lee', '2001-01-18', '+380951234567', '101', 4.6, 'F', 2021, 'Computer Science');

-- Отримати інформацію про студентів (ім'я+прізвище, дата народження) у порядку від найстаршого до наймолодшого.
SELECT first_name || ' ' || last_name AS full_name, birthday
FROM students
ORDER BY birthday ASC;

-- Отримати список шифрів груп, що не повторюються.
SELECT DISTINCT group_code
FROM students
ORDER BY group_code;

-- Отримати рейтинговий список студентів (ім'я (*або ініціал)+прізвище, середній бал): спочатку студентів із найвищим середнім балом, наприкінці з найменшим.
SELECT first_name || ' ' || SUBSTR(last_name, 1, 1) || '.' AS full_name, avg_mark
FROM students
ORDER BY avg_mark DESC;

-- Отримати другу сторінку списку студентів під час перегляду по 6 студентів на сторінці.
SELECT *
FROM students
ORDER BY id
OFFSET 6
LIMIT 6;

-- Отримати список 3-х найуспішніших студентів (ім'я, прізвище, середній бал, група).
SELECT first_name, last_name, avg_mark, group_code
FROM students
ORDER BY avg_mark DESC
LIMIT 3;

-- Отримати максимальний середній бал серед усіх студентів.
SELECT MAX(avg_mark)
FROM students;

-- Отримати інфо про студентів (ініціал+прізвище, номер телефону), де номер телефону буде частково прихований та представлений у форматі: +38012******* (тобто видно код оператора).
SELECT CONCAT(LEFT(first_name, 1), '.', last_name) AS name, CONCAT(LEFT(phone_number, 6), '*******') AS phone_number
FROM students;
