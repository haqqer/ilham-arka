const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gudang'
});

db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('Connected to database');
})

global.db = db;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    let query = "SELECT categories.id, categories.name AS category_name, GROUP_CONCAT(products.name) AS products  FROM products JOIN categories ON categories.id = products.category_id GROUP BY products.category_id"
    db.query(query, (err, result) => {
        if(err) {
            res.redirect('/');
        }
        res.render('index.ejs', {
            products: result
        });
        // res.send(result)
    })
})

app.listen(port, () => {
    console.log("App is running on port "+port);
})