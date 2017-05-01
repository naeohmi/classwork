DROP TABLE IF EXIST authors;

DROP TABLE IF EXIST books;

CREATE TABLE
authors
(ID SERIAL PRIMARY KEY,
name VARCHAR (255),
nationality VARCHAR (255),
birth_year INTEGER);

CREATE TABLE
books
(ID SERIAL PRIMARY KEY,
title VARCHAR (255),
publication_date INTEGER,
author_id INTEGER REFERENCES authors(id));