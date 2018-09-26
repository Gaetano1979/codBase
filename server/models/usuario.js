module.exports=function (db) {
    const dbName='calendario';
    const dbs=db.db(dbName);
    const Usuarios=dbs.collection('usuarios');

    this.verificarUsuario=(reg,callback)=>{
        let usu={nombre:reg.user,clave:reg.pass};
        Usuarios.findOne(usu,(err,doc)=>{
            if(err)callback(err);
            else callback(null,doc);

        });
    };
};