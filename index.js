const express = require('express'),
        app=express(),
        mongoclient=require('mongodb').MongoClient;

const PORT= process.env.PORT || 3000;
const confing={
    rootPath: __dirname
};

mongoclient.connect('mongodb://localhost:27017/calendario',(err,db)=>{
    if(err)throw err;
    console.log('Base de dato conectada corectamente..');
    
})