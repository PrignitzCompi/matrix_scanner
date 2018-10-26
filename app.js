const http = require('http'),
      net = require('net');

const HTTP_PORT = 5000;
const TCP_PORT  = 5001;

class List {

    get msg (){

        let oldest_message_data = Number.MAX_SAFE_INTEGER;
        for(let date in this.msg_list){
            if(msg.date > this.msg_list[date]) msg.date = date;
        }
        
        let oldest_message_data

        let msg;
        return 
    }

    set msg ( msg ){
        msg_list[msg.date] = msg;
    }
}

const msg_list = [];

const http_server = http.createServer(()=>{});

const tcp_server = net.createServer( socket => {
    socket.on('data', data => {
        let date = Date.now();
        let msg = JSON.parse(data);
        msg.date = date;
        
        console.log(msg);
    });
    socket.end();
});



http_server.listen(HTTP_PORT, () => {
    console.log(`http listening on ${HTTP_PORT}`);
});

tcp_server.listen(TCP_PORT, () => {
    console.log(`tcp listening on ${TCP_PORT}`);
});
