var net = require('net')
var HOST = '127.0.0.1'
var PORT = 6969
var num = 15
var i = 0
var client = new net.Socket()
client.connect(PORT, HOST, function() {
    console.log('CONNECTD TO: ' + HOST + ': ' + PORT)
    client.write('I am Tanawat')
})

client.on('data', function(data) {
    console.log('DATA : ' + data)
    if(data=='OK'){
        client.write('' + data)
    }
    else if(data == 'WRONG'){
        console.log('WRONG')
        client.write('' + num)
    }
    else if(data == 'BINGO'){
        console.log('BINGO')
        client.destroy()
    }
    console.log('num :' + num)
    num++
    if(i==5){
        
        client.connect(PORT, HOST, function(){
            console.log('CONNECTED TO: ' + HOST + ':' + PORT)
            client.write('I am Tanawat')
        })
    } 
    i++
})

client.on('close', function(){
    console.log('Connection Closed')
})