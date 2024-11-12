const express = require('express');
const path = require('path');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path: './.env'})
const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const publicdirectory = path.join(__dirname, './public')
// console.log(__dirname);

app.use(express.static(publicdirectory))
app.set('view engine', 'hbs');

db.connect((error)=>{
    if (error) {
        console.log(error)
    }else {
        console.log("mysql connected......")
    }
}
);

app.get('/', (req, res) => {
    // res.send("<h1>Home Page</h1>")
    res.render('index')
});

app.listen(5000,()=>{
    console.log("Server started on port 5000");
})