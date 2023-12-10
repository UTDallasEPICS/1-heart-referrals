const Pool = require('pg').Pool;
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'mypassword',
    database: 'ohmega'
})
module.exports = pool;