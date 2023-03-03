
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mysql from 'mysql2'
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import bcrypt from 'bcrypt'
import session from 'express-session'   
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';

const app = express()
const PORT = 3000
const oneDay = 1000 * 60 * 60 * 24

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser());

if(!session.user){
    app.use(session({
        secret: "Algo",
        saveUninitialized:true,
        cookie: { maxAge: oneDay },
        resave: true,
        rolling: true
    }))
    
}

const limiter = rateLimit({
    windowMs: 15*60*1000,
    max: 100, //limit the number of request for an IP
    delayMs: 0 //disables delays
})

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "PETS_HEALTH"
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado");
});

app.post('/login',(req,res)=>{

})

app.listen(PORT, ()=>{
    console.log('Runnning in localhost:'+PORT)
})
