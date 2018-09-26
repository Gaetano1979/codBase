let mongoclient=require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName='calendario';

mongoclient.connect(url,(err,db)=>{
    if(err)throw err;
    console.log('Base de Datos calendario conectada corectamente..');
    const dbs=db.db(dbName);
    const Usuarios= dbs.collection('usuarios');

    Usuarios.findOne({nombre:'admin'},(err,doc)=>{
        if(err)throw err;

        if(doc){
            console.log('Usuario registrado corectamente..');
            
        }else{
            //Creamos un solo usuario
            /*Usuarios.insertOne({nombre:'admin',clave:'clave'},(err,doc)=>{
                if(err)throw err;
                console.log('Usuario registrado corectamente..',JSON.stringify(doc));
                
            });*/
            //Creamos dos usuarios
            Usuarios.insertMany([
                {nombre:'admin',clave:'clave'},
                {nombre:'gaetano',clave:'gaetano1979'}],
                (err,doc)=>{
                    if(err)throw err;
                    console.log('Usuarios registrados corectamnete..',JSON.stringify(doc));                    
                }
            );
        }
        db.close();
    });
    
});
