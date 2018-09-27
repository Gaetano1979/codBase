module.exports=function(db){
    const dbName='calendario',
          dbs=db.db(dbName),
          Eventos=dbs.collection('eventos');
          
    this.recibirEventos=(id,callback)=>{
        Eventos.find({nombre:id}).toArray((err,docs)=>{
            if(err) callback(err);
            else callback(null,docs);
        });
    };

    this.agregarevento=(doc,callback)=>{
        Eventos.insert(doc,(err,doc)=>{
            if(err)callback(err);
            else callback(null,{id:doc.insertedIds[0],total:doc.insertedCount});
            console.log("Agregado documento",doc);
            
        });
    };

    this.eliminarEvento=(id,callback)=>{
        Eventos.remove({_id: id},(err,doc)=>{
            if(err)callback(err);
            else callback(null,doc.result);
            console.log("Eliminato",doc);
            
        });
    };
};