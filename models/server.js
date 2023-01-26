const express = require('express');
const cors = require('cors')


class Server {




    constructor(){


        this.app = express();

       //puerto del servidor env
       this.port = process.env.PORT;
    
       //Rutas
        this.usuariosPath='/api/users';

       //Middlewares
        this.middlewares();

       //rutas de mi aplicacion
        this.routes();


    }

    middlewares(){

        // CORS
        this.app.use(cors());

        // Lectura Y Parseo del Body
        this.app.use(express.json());

        //Directorio Publico
        this.app.use(express.static('public'))



    }


    routes(){

        //configuro la ruta /api/users y traigo la rutas desde un archivo externo
        this.app.use(`${this.usuariosPath}`, require('../routes/user.routes') );

    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('servidor corriendo');
        })
    }

}





module.exports = Server;