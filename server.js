const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your MySQL username (default is 'root' for XAMPP)
    password: '', // your MySQL password (default is empty for XAMPP)
    database: 'your_database_name' // your MySQL database name
});

// Connect to MySQL database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database');
});

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, roll } = req.body;
    const insertQuery = `INSERT INTO students (name, roll) VALUES (?, ?)`;

    connection.query(insertQuery, [name, roll], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data into database');
        } else {
            console.log('Data inserted successfully');
            res.redirect('/success.html'); // Redirect to a success page
        }
    });
});

// Serve static files
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
