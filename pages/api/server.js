import { createServer } from 'http'
import { Server } from 'ws'

const httpServer = createServer()
const wss = new Server({ server: httpServer })

wss.on('connection', (ws) => {
  console.log('New web socket connection')

  ws.on('message', (data) => {
    console.log('Received message:', data)

    ws.send(`Hello, you sent: ${data}`)
  })
})

httpServer.listen(3000, () => {
  console.log('Web socket server listening on port 3000')
})
