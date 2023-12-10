// los modelos sirven para intertar item, ver item, modificar y eliminar
const { conn } = require('../config/conn');


const getAll = async () => {
    try{
        const [rows] = await conn.query('SELECT * FROM product;');
        return rows;
    }   catch (error){
       return{
        error: true,
        message: 'hemos detectado un error:' + error
       }  }
   finally{
    conn.releaseConnection()
   }
}
const getOne = async (id) => {
    try{
        const [rows] = await conn.query('SELECT * FROM product WHERE product_id = ?;', id);
        return rows;
    }   catch (error){
       return{
        error: true,
        message: 'hemos detectado un error:' + error
       }  }
   finally{
    conn.releaseConnection()
   }
}

module.exports = {
    getAll, getOne
}