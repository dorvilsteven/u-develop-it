const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3005;
const app = express();

// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Neverneeded1!',
        database: 'election'
    },
    console.log('Connected to the election database')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {console.log(err)};
    console.log(row);
});

db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {console.log(err)}
    console.log(result);
});

// default response for not found request
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});
