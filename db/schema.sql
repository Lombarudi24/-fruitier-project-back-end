DROP DATABASE IF EXISTS fruits_dev;
CREATE DATABASE fruits_dev;

\c fruits_dev;

CREATE TABLE fruits (
    fruitId SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    Taste TEXT NOT NULL,
    Color VARCHAR(255),
    Nutrition TEXT NOT NULL,
    Origin VARCHAR(255),
    Season VARCHAR(255),
    Images TEXT NOT NUll
)