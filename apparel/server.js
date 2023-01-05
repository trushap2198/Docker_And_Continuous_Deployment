const express = require('express');
const  { Pool }= require('pg');

const HOST = '0.0.0.0';
const PORT = 80;
const app = express();

const pool = new Pool({user:'postgres', host:'db'}) //db is the databse container

app.get('/', (req,res) => {
    pool.query('select * from apparel',(error, response)=>{
        res.json(response.rows);
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
