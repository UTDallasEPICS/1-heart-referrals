const {Pool}=require('pg')
const pool = new Pool({
    host:'db',
    port:5432,
    user:'postgres',
    password:'#OneHe@rtMcKinney#',
    database:'OHM'
})
module.exports=pool