var net = require('net')
var HOST = '127.0.0.1'
var PORT = 6969
var client = new net.Socket()
var num = 0
client.connect(PORT, HOST, function(){
    console.log('connected to : ' + HOST + ':' + PORT)
    client.write('I am Tanawat')
})

client.on('data', function(data){
    console.log('DATA : ' + data)
    if(data == 'OK'){
        console.log('DATA : ' + data)
    }
    else if(data == 'WRONG'){
        client.write('' + num)
    }
    else if(data == 'BINGO'){
        client.destroy()
    }
    console.log('' + num)
    num++
})

client.on('close', function(){
    console.log('disconnected')
})