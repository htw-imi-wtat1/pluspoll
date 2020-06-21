'use strict'

module.exports = io => {
    io.on('connection', client => {
        //   client.emit('load all messages', messages.reverse())

        console.log('new connection')

        client.on('disconnect', () => {
            console.log('user disconnected')
        })
        client.on('newPoll', data => {
            console.log("newPoll" + JSON.stringify(data))
            io.emit('newPoll', data)
        })
        client.on('addOption', data => {
            console.log("addOption" + JSON.stringify(data))
            io.emit('addOption', data)
        })
        client.on('vote', data => {
            console.log("vote" + JSON.stringify(data))
            // io.emit('addOption', data)
        })
    })
}
