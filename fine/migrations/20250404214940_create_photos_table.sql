CREATE TABLE photos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  imageUrl TEXT NOT NULL,
  category TEXT NOT NULL,
  dimensions TEXT,
  year INTEGER,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);