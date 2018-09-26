const bodyparser=require('body-parser'),
      express=require('express');
      
module.exports=(app,config)=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:false}));

    app.use(express.static(config.rootPath+'/client'));
}