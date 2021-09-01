import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'

const port = process.env.PORT || 8080
const server = express()

server.use(cors())
server.use(express.json())

server.get('/api/v1/test', (req,res) => {
    res.send('server !!!!!!!')
})

if (process.env.NODE_ENV === "production") {
    server.use(express.static( path.resolve('client/build')))
    server.get('/*', (req,res) => {
        res.sendFile( path.resolve('client/build/index.html'))
    })
}

server.listen(port, () => {
    console.log(`Server has been started on http://localhost:${port}`)
})