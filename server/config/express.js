const loger=require('morgan'),
      bodyparser=require('body-parser'),
      express=require('express');
      
module.exports=(app,config)=>{
    app.use(loger('dev'));
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:false}));

    app.use(express.static(config.rootPath+'/client'));
}