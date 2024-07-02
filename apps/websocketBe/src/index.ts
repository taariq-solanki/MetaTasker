console.log(1)
import express from "express"
import { WebSocket, WebSocketServer } from "ws"
// import WebSocket, { WebSocketServer } from 'ws';
import { PrismaClient } from '@prisma/client'
const client = new PrismaClient()
const app=express()
const server=app.listen(8080)
const socketServer=new WebSocketServer({ server: server })

//const tasks=client.task.find

socketServer.on('connection',function(ws){
    ws.on('error', console.error);
    //ws.send(JSON.stringify(arra))
    
    // ws.on("message",function(data){
    //     socketServer.clients.forEach(function each(client){
    //         if(client.readyState===WebSocket.OPEN){
    //              client.send(JSON.stringify(data))
    //         }
    //     })
    // })
// ws.send()
    
    
})

console.log('WebSocket server is running on ws://localhost:8080');