drop table if exists books;

create table books (
  id INTEGER primary key generated by default as identity,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  description TEXT NOT NULL,
  rating smallint
);

INSERT into books (title, url, description, rating)
values
  ('Google', 'http://google.com', 'An indie search engine startup', 4);