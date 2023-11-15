const express = require("express")
const app= express()
const PORT=3000;
const pool = require('./db')
//routes 
app.use(express.json())
app.get('/', async(req,res)=>{
    const data = await pool.query('SELECT * FROM admin') // selects all admins
    res.status(200).send({data: data.rows})
})
app.post('/hi',async (req,res)=>{
    const {name,location}=req.body
    try{
        await pool.query("INSERT INTO clients (name,address) VALUES ($1,$2)",[name,location])
        res.status(200).send({message:"successful added client"})
    }
    catch(err){
        console.log(err)
        res.sendStatus(500)
    } //check
})
app.get('/setup',async (req,res)=>{
    try{
        await pool.query("CREATE TABLE schools(id SERIAL PRIMARY KEY, name VARCHAR(100),address VARCHAR(100)")
    }catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})
app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})

