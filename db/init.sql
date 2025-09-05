CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);
INSERT INTO users (name, email)
VALUES ('Joy Kumar', 'joykumar.cse@gmail.com')
ON CONFLICT DO NOTHING;
