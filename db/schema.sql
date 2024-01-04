DROP DATABASE IF EXISTS fruitier_dev;
CREATE DATABASE fruitier_dev;

\c fruitier_dev;

CREATE TABLE fruitier (
    fruitId SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    Taste TEXT NOT NULL,
    Color VARCHAR,
    Nutrition TEXT NOT NULL,
    Origin VARCHAR,
    Season VARCHAR,
    Picture TEXT NOT NULL
    
);