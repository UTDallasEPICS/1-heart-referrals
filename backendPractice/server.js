const express = require("express")
const app = express()
const cors = require('cors');
const bcrypt = require('bcryptjs');
const PORT = 3001;
const pool = require('./db')
const axios = require("axios").create({ baseUrl: "http://localhost:3001/" });
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//routes 
app.use(express.json())
app.use(cors());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});

app.get('/', async (req, res) => {
    try {
        const test = await prisma.admin.findMany();
    } catch (error) {

    }
})

app.post('/assist', async (req, res) => {
    const con = req.body;
    try {
        const find = await prisma.client.findMany({
            orderBy: {
                CreatedAt: 'desc',
            },
            skip: con.page * 50,
            take: 50,
            select: {
                FirstName: true,
                LastName: true,
                ServicesSeeking: true,
                CreatedAt: true,
            },
        });
        console.log(find);
        res.status(200).json(JSON.stringify(find));
    } catch (error) {
        console.log(error);
    }
})

app.post('/login', async (req, res) => {
    const acc = req.body.cred;
    try {
        //const check = await pool.query("SELECT * FROM  WHERE email = $1", [acc.user]);
        const check = await prisma.admin.findFirst({
            where: {
                Email: acc.user
            },
        })
        if (!check)
            throw new Error('WRONG');

        if (await bcrypt.compare(acc.pwd, check.Password)) {

            res.status(201).json(JSON.stringify(
                check,
                (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
            ));
        }
        else
            throw new Error('WRONG');
    }
    catch (error) {
        console.log(error);
        res.status(401).send();
    }

})

app.post('/sign-up', async (req, res) => {
    const acc = req.body.cred;
    const hpwd = await bcrypt.hash(acc.pwd, 10);
    try {
        //const check = await pool.query("SELECT email FROM test WHERE email = $1", [acc.user]);
        const check = await prisma.admin.findFirst({
            where: {
                Email: acc.user
            },
        });
        console.log(check);
        if (check)
            throw new Error('EXISTS');
        //const add = await pool.query("INSERT INTO test (email, pwd) VALUES($1, $2)", [acc.user, hpwd]);
        const add = await prisma.admin.create({
            data: {
                FirstName: acc.fname,
                LastName: acc.lname,
                WorkTitle: 'worker',
                Phone: acc.phone,
                Email: acc.user,
                Password: hpwd
            }
        })
        res.status(201).send();
    } catch (error) {
        console.log(error);
        res.status(401).send();
    }
})



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})

