const path=require('path');
const http=require('http');
const {Server}=require('socket.io');


const express=require('express');
const app=express();
const server=http.createServer(app);

const io=new Server(server);
io.on("connection",(socket)=>{
    console.log("al bal");
    socket.on('data',(message)=>{
        console.log(message);
        io.emit('message',message);
    });
});

app.get('/',(req,res)=>{
   res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(3000);
