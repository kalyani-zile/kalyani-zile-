const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed");
  } else {
    console.log("Connected to MySQL Database");
  }
});

app.post("/register", (req, res) => {
  const { name, id, branch, percentage, mobile, email } = req.body;

  const sql = `
    INSERT INTO students
    (name, student_id, branch, percentage, mobile, email)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [name, id, branch, percentage, mobile, email],
    (err, result) => {
      if (err) {
        res.status(500).json({ message: "Registration failed" });
      } else {
        res.json({ message: "Student Registered Successfully" });
      }
    }
  );
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port 3000");
});
