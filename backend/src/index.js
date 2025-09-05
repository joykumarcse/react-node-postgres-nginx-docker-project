const express = require('express');
const { Pool } = require('pg');
const PORT = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL;
const pool = new Pool({ connectionString: DATABASE_URL });
const app = express();
app.use(express.json());
app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/api/users', async (req, res) => {
  const result = await pool.query('SELECT id, name, email, created_at FROM users ORDER BY id');
  res.json(result.rows);
});
app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));