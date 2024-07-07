console.log(1)
import express from "express"
import { WebSocket, WebSocketServer } from "ws"
// import WebSocket, { WebSocketServer } from 'ws';
import { PrismaClient } from '@prisma/client'
const client = new PrismaClient()
const app = express()
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT)
const socketServer = new WebSocketServer({ server: server })

const teamsConnected = new Map()
//const tasks=client.task.find
async function run(){
    async function dbTask(newData: any,teamId:any) {
        console.log(newData)
        try {
            const db = await client.task.update({
                where: {
                    taskId: newData.taskId
                },
                data: {
                    taskStatus: newData.status
                }
            })
            const dbData=await client.team.findFirst({
                where:{
                    teamId:teamId
                },
                select:{
                    tasks:true
                }
            })
            return dbData
        } catch (error) {
            console.error('Error updating database:', error);
        }
    
    
    }
    
    socketServer.on('connection', function (ws, req) {
        ws.on('error', console.error);
        //console.log(socketServer.clients)
        //making every teams 
        const teamIdString: any = req.url?.split('teamId=')[1]
        const teamId = parseInt(teamIdString)
        if (!teamsConnected.has(teamId)) {
            teamsConnected.set(teamId, [])
        }
        teamsConnected.get(teamId).push(ws)
        console.log(teamId)
    
    
        //ws.send(JSON.stringify(arra))
        //ws.send("connected -from cserver")
    
        ws.on("message", async function (data: any) {
    
            const newData = await JSON.parse(data)
            console.log(newData,"hhshsh")
    
            //db call
            const dbData = await dbTask(newData,teamId)
            console.log(dbData)
            broadcastToTeam(teamId, dbData)
        })
    
    
    
    })
    function broadcastToTeam(teamId: number, dbData: any) {
        const connections = teamsConnected.get(teamId);
        if (connections) {
            connections.forEach(function each(client: any) {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(dbData.tasks))
                }
            })
        }
    }
    console.log('WebSocket server is running on ws://localhost:8080');
}
try{
    run()
}catch{
    console.log("somethng wrong")
    run()
}
