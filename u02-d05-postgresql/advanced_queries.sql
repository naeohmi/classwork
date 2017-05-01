-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause
-- Find all fields (book and author related) for all books written by George R.R. Martin.
SELECT * FROM authors
FULL OUTER JOIN books ON authors.id = books.author_id
WHERE authors.name = 'George R.R. Martin';

-- Find all fields (book and author related) for all books written by Milan Kundera.
SELECT * FROM authors
FULL OUTER JOIN books ON authors.id = books.author_id
WHERE authors.name = 'Milan Kundera';

-- Find all books written by an author from China or the UK.
SELECT * FROM books
FULL OUTER JOIN authors ON books.authors_id = authors.id 
WHERE authors.nationality = ('China' OR 'United Kingdom');

-- Find out how many books Albert Camus wrote.
SELECT COUNT(title) FROM books
FULL OUTER JOIN authors ON books.author_id = authors.id
WHERE authors.name = 'Albert Camus';

-- Find out how many books were written by US authors.
SELECT COUNT(title) FROM books
FULL OUTER JOIN authors ON books.author_id = authors.id
WHERE authors.nationality = 'United States of America';

-- Find all books written after 1930 by authors from Argentina.
SELECT * FROM books
FULL OUTER JOIN authors ON books.author_id = authors.id 
WHERE authors.nationality = 'Argentina' AND books.publication_date > 1930;

-- Find all books written before 1980 by authors not from the US.
SELECT * FROM books
FULL OUTER JOIN authors ON books.author_id = authors.id
WHERE authors.nationality != 'United States of America' AND books.publication_date < 1980;

-- Find all authors whose names start with 'J'.
SELECT * FROM authors
WHERE name LIKE 'J%';

-- Find all authors who have written books that start with the letter 'N'.
SELECT * FROM authors
FULL OUTER JOIN books ON authors.id = books.author_id 
WHERE books.title LIKE 'N%';