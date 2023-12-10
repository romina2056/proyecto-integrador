const mysql = require('mysql2');

const pool = mysql.createPool({
user: 'root',
password: 'j4ckl0c0',
host: 'localhost',
port: 4000,
database:'funko_schema',
connectionLimit: 10,
waitForConnections: true,
queueLimit: 0
});
pool.getConnection((err, conn) => {
    if (err){
        console.log('hubo un error al conectarse a la DB: ' + err); }
        else{
            console.log('Conexión a la Base de datos exitosa'),
            conn.release(); 
        }
});

module.exports = {
    conn: pool.promise()
}