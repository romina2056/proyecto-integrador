// los modelos sirven para intertar item, ver item, modificar y eliminar
const { conn } = require('../config/conn');


const getAll = async () => {
    try{
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;');
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
const getOne = async (param) => {
    try{
        const [rows] = await conn.query('SELECT product.*, category.category_name, licence.licence_name FROM (product LEFT JOIN category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE ?;', param);
        return rows;
    }   catch (error){
       return{
        error: true,
        message: 'hemos detectado un error:' + error
       }  
    }
   finally{
    conn.releaseConnection()
   }
}
const create = async (params) => {
    try{
        const [product] = await conn.query('INSERT INTO product (product_name, product_description, price, stock, discount, sku, dues, image_front, image_back, category_id, licence_id) VALUES ?;', [params]);
        return product;
    }   catch (error){
       return{
        error: true,
        message: 'hemos detectado un error:' + error
       }  
    }
   finally{
    conn.releaseConnection()
   }
   const deleteOne = async (params) => {
    try{
        const [product] = await conn.query('DELETE FROM product WHERE ?', params);
        return product;
    }   catch (error){
       return{
        error: true,
        message: 'hemos detectado un error:' + error
       }  
    }
   finally{
    conn.releaseConnection()
   }
}
module.exports = {
    getAll, getOne, create, deleteOne
}


