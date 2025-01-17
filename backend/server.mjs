import express from 'express';
import bcrypt from 'bcrypt';
import sqlite3 from 'sqlite3';
import cors from 'cors'; // Import cors

const app = express();
const db = new sqlite3.Database('./users.db');
const saltRounds = 10;

// Enable CORS for all routes
app.use(cors());

// Enable JSON body parsing middleware
app.use(express.json());

// Create the database and users table
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL
  )`);
});

// Signup endpoint
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ? OR username = ?`, [email, username], (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (user) {
      return res.status(400).json({ error: 'User already exists' });
    }

    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to hash password' });
      }

      db.run(
        `INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)`,
        [username, email, hash],
        (err) => {
          if (err) {
            return res.status(500).json({ error: 'Failed to create user' });
          }
          res.status(201).json({ message: 'User registered successfully' });
        }
      );
    });
  });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Username and password are required.' });
    }
  
    // Find user by username
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
      if (err || !user) {
        return res.status(400).json({ success: false, message: 'Invalid username or password' });
      }
  
      // Compare the hashed password
      bcrypt.compare(password, user.password_hash, (err, isMatch) => {
        if (err || !isMatch) {
          return res.status(400).json({ success: false, message: 'Invalid username or password' });
        }
  
        // Successful login
        res.json({ success: true });
      });
    });
  });

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
