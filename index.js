const express = require('express')
const axios = require('axios');
const app = express();
//Creating server for Load Balancing
const server1 = express();
const server2 = express();
const server3 = express();
const visits = require('./middleware/reqCount');

//adding middleware
// app.use(( req , res , next )=> {
//     console.log("Method ",req.method , " Requested URL ",req.originalUrl);
//     next();
// });

//How many request on main server
app.use(visits);
//This middleware gives the count request on each server
server1.use(visits);
server2.use(visits);
server3.use(visits);

server1.use('/server1',require('./router/server1'));
server2.use('/server2',require('./router/server2'));
server3.use('/server3',require('./router/server3'));

app.use('/',require('./router'))

server1.listen(3000,(err)=>{
    if(err){
        console.log("Erro running server on 3000 ",err);
    }
    console.log("AIRTEL Server running on port 3000");
});

server2.listen(3001,(err)=>{
    if(err){
        console.log("Erro running server on 3001 ",err);
    }
    console.log("JIO Server running on port 3001");
});

server3.listen(3002,(err)=>{
    if(err){
        console.log("Erro running server on 3002 ",err);
    }
    console.log("VI Server running on port 3002 ");
});

app.listen(8000,(err)=>{
    if(err){
        console.log("Erro running server on 8000 ",err);
    }
    console.log("Server running on port 8000 of SMS APIs");
});
