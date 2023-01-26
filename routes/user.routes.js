

const{ Router } = require('express');
const { usersGet, usersPost, usersPut, usersDelete, usersPatch } = require('../controllers/users.controller');

//configuracion rutas de la app archivo externo.

const router = Router();


        //metodo get desde el controller
        router.get('/', usersGet);
        
        
        //metodo post
        router.post('/', usersPost);
        
        //metodo put
        router.put(`/:id`, usersPut);

        //metodo patch
        router.patch('/',usersPatch );

        //metodo delete
        router.delete('/',usersDelete );






module.exports = router;