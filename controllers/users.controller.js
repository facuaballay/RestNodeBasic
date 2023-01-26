const { response } = require ('express');


const usersGet = (req, res) => {

    const {q,nombre = "no name"  ,apikey,page , limit} = req.query;

    
    res.json({
      
        msg:'Get API - Controlador',
        q,
        nombre,
        apikey,
        page,
        limit

    });
  };

const usersPost = (req, res) => {
    
    const {nombre,edad,id} = req.body;

    
    res.status(201).json({
                
        msg:'Post API - Controlador ',
        nombre,
        edad,
        id
    
    });
 };

const usersPut = (req, res) => {

    const id = req.params.id;

    res.status(400).json({
      
        msg:'Put API - Controlador',
        id
        
    });
  };

const usersPatch = (req, res) => {
    res.json({
      
        msg:'Patch API - Controlador'
    
    });
  };  



const usersDelete = (req, res) => {
    res.json({
      
        msg:'Delete API - Controlador'
    
    });
  };  



 module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete



 } 