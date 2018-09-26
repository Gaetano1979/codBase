var ObjectId = require('mongodb').ObjectID;

const usuario=require('../models/usuario');
const evento=require('../models/eventos');

module.exports=(app,db)=>{
    const Usuario=new usuario(db);
    const Evento=new evento(db);

    app.get('/',(req,res)=>{
        res.sendFile('index.html');
    });
    app.post('/login',(req,res)=>{
        Usuario.verificarUsuario(req.body,(err,respuesta)=>{
            if(err)throw err;
            else if(respuesta){
                app.locals.id=respuesta._id;
                res.send('Validado');
            }else{
                res.send('Error');
            }
        })
    });
    app.get('/events/all',(req,res)=>{
        if(typeof(app.locals.id)==='undefined'){
            res.send('0');
        }else{
            Evento.recibirEventos(ObjectId(app.locals.id),(err,respuesta)=>{
                if(err)throw err;
                else res.json(respuesta)
                
            });
        }
    });
    app.post('/events/new',(req,res)=>{
        req.body.nombre=ObjectId(app.locals.id);
        if(req.body.end=="")delete req.body.end;

        Evento.agregarevento(req.body,(err,respuesta)=>{
            if(err)throw err;
            else res.json(respuesta);
        });
    });
    app.post('events/delete:id',(req,res)=>{
        Evento.eliminarEvento(ObjectId(req.body.id),(err,respuesta)=>{
            console.log('delete',respuesta);
            
        });
    });
}