//Es un objeto global 'process'
//========================
//PUERTO
//========================
process.env.PORT = process.env.PORT || 3000

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//========================
//VENCIMIENTO DEL TOKEN
//========================
// 60 seg
// 60 min
// 24 h
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30

//========================
//SEED de autenticacion
//========================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo'

//CONECTAR LAS BASES DE DATOS
// SI UNA PERSONA SE CONECTA CON EL MODO DE DESARROLLO SE 
// ENVIARA LA RUTA DEL LOCAL DE MONGO O SI NO TRABAJARA 
// EN LA NUBE DEL MONGO ATLAS
//MONGO_URL => hemos creado una variable del entorno en heroku para ocultar la ruta de la nube de mongo
let urlDB;

  if(process.env.NODE_ENV == 'dev'){
      urlDB = 'mongodb://localhost:27017/cafe'
  }else{
    urlDB =process.env.MONGO_URL
  }

process.env.URLDB = urlDB

//========================
//GOOGLE Client ID
//========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '615170825448-i101rpa0u9uqbb0cb00altf7o46le6vl.apps.googleusercontent.com'

