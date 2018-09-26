module.exports=function (db) {
    const Usuarios=db.collection('usuarios');

    this.verificarUsuario=(reg,callback)=>{
        let usu={nombre:reg.user,clave:reg.pass};
        Usuarios.findOne(usu,(err,doc)=>{
            if(err)callback(err);
            else callback(null,doc);

        });
    };
};