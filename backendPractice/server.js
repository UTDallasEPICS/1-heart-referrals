const express = require("express")
const app= express()
const PORT=3001;
const pool = require('./db')
const axios = require("axios").create({baseUrl: "http://localhost:3001/"});
//routes 
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get('/', async(req, res) => {
    try {
        const test = await pool.query("SELECT * FROM test;");
        console.log(test.rows);
        //console.log("Hello World");
    } catch (error) {
        
    }
})

app.post('/', async(req,res)=>{
    try {
        console.log(req.body);
    }
    catch {}
    
})

app.post('/sign-up', async(req,res) => {
    const acc = req.body.cred;
    
    try {
        const check = await pool.query("SELECT email FROM test WHERE email = $1", [acc.user]);
        if(check.rowCount > 0)
            throw new Error('EXISTS');
        //const add = await pool.query("INSERT INTO test (email, pwd) VALUES($1, $2)", [acc.user, acc.pwd]);
        res.status(201).send();
    } catch (error) {
        res.status(401).send();
    }
})
app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})

