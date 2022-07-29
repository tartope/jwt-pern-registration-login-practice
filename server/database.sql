-- makes writing commands more visually pleasing.
--create database called perntodo
CREATE DATABASE jwttutorial;

--create table schema:
--remember to set extension (download) for 'uuid_generate_v4()' to function: run command -> 'create extension if not exists "uuid-ossp";' inside database.
CREATE TABLE users(
    -- 'uuid' creates a complex id; 'uuid_generate_v4()' is a function that runs to create the uuid
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    --sets max character limit of 255
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

--can check to see if it works:
--insert fake users (use single quotes to add data (unable to do so with double quotes)).
INSERT INTO users (user_name, user_email, user_password) VALUES ('tunisia', 'tartope@gmail.com', '123');