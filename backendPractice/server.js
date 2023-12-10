const express = require("express")
const app = express()
const cors = require('cors');
const bcrypt = require('bcryptjs');
const PORT = 3001;
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
    } catch (error) {

    }
})

app.get('/assist', async (req, res) => {
    try {
        const add = await prisma.client.count();
        res.status(200).json(JSON.stringify(add));
    } catch (error) {
        console.log(error);
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
                ClientId: true,
                FirstName: true,
                LastName: true,
                ServicesSeeking: true,
                CreatedAt: true,
            },
        });
        res.status(200).json(JSON.stringify(
            find,
            (key, value) => (typeof value === 'bigint' ? value.toString() : value) // return everything else unchanged
        ));
    } catch (error) {
        console.log(error);
    }
})

app.post('/client', async (req, res) => {
    const id = req.body.client;
    try {
        const find = await prisma.client.findFirst({
            where: {
                ClientId: id,
            },
        });
        console.log(find);
        res.status(200).json(JSON.stringify(
            find,
            (key, value) => (typeof value === 'bigint' ? value.toString() : value)
        ));
    } catch (error) {
        console.log(error);
    }
})

app.post('/login', async (req, res) => {
    const acc = req.body.cred;
    try {
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
                (key, value) => (typeof value === 'bigint' ? value.toString() : value)
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

        const check = await prisma.admin.findFirst({
            where: {
                Email: acc.user
            },
        });
        console.log(check);
        if (check)
            throw new Error('EXISTS');
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

