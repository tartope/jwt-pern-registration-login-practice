-- makes writing commands more visually pleasing.
--create database called perntodo
CREATE DATABASE jwttutorial;

--create table schema
-- remember to set extension (download) for 'uuid_generate_v4()' to function
CREATE TABLE users(
    -- 'uuid' creates a complex id; 'uuid_generate_v4()' is a function that runs to create the uuid
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    --sets max character limit of 255
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);