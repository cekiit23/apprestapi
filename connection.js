const mysql = require('mysql');

// membuat koneksi ke database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'restapi'

})

conn.connect( (error) => {
    if(error) throw error;

    console.log('mysql running')
})

module.exports = conn;