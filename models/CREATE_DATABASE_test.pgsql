CREATE DATABASE test;

CREATE TABLE users(
  id SERIAL,
  first_name VARCHAR(64),
  last_name VARCHAR(64),
  is_male BOOLEAN
)

DROP TABLE IF EXISTS students;

CREATE TABLE IF NOT EXISTS users (
 id SERIAL PRIMARY KEY,
 first_name VARCHAR(64) NOT NULL,
 last_name VARCHAR(64),
 email VARCHAR(64) CHECK (email <> '' ) NOT NULL UNIQUE,
 tel_number CHAR(13) NOT NULL UNIQUE,
 birthday DATE CHECK (birthday <= CURRENT_DATE) NOT NULL,
 is_male BOOLEAN,
 orders_count SMALLINT CHECK (orders_count >= 0) DEFAULT 0
)

CREATE TABLE IF NOT EXISTS telephone (
 id SERIAL PRIMARY KEY,
 brend VARCHAR(64) NOT NULL,
 model VARCHAR(64) NOT NULL,
 price NUMERIC(7,2) CHECK (price > 0) ,
 color VARCHAR(64) NOT NULL,
 production_date DATE CHECK (production_date <= CURRENT_DATE) NOT NULL,
 UNIQUE(brend, model)
)

INSERT INTO telephone(brend, model, price, color, production_date)
VALUES('Delory', 'Ultra Max', 49.99, 'Red', '2020-12-01');

SELECT brend || '' || model as "brend/model",
    EXTRACT(YEAR FROM age(production_date))
FROM telephone;

SELECT brend || '' || model as "brend/model",
    EXTRACT(YEAR FROM age(production_date))
FROM telephone
ORDER BY production_date;