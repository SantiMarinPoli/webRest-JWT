require('./config/config')


const mongoose = require('mongoose');
const express = require('express')
const path = require('path')

const app = express()



const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//Habilitar la carpeta public
app.use(express.static(path.resolve( __dirname , '../public')))

//CONFIGURACION GLOBAL DE RUTAS
app.use(require('./route/index'))


//SE CONNECTA LAS BASES DE DATOS DE MONGO
  mongoose.connect( process.env.URLDB , 
                    {useNewUrlParser:true,useCreateIndex:true}
                    ,(err,res)=>{
    if(err)throw err;

    console.log("BD ONLINE")
  });

//ESTA FUNCION LLAMA AL SERVIDOR EL PUERTO CORRESPONDIENTE
app.listen(process.env.PORT,()=>{
    console.log("Escuchando el puerto: ",process.env.PORT)
})