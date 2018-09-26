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
            Evento.recibirEventos(app.locals.id,(err,respuesta)=>{
                if(err)throw err;
                else res.json(respuesta)
            });
        }
    });
    app.get('/events/new',(req,res)=>{
        Evento.agregarevento(req.body,(err,respuesta)=>{
            if(err)throw err;
            else res.json(respuesta);
        });
    });
}