const net = require('net');
const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'matrix_user',
  host: 'localhost',
  database: 'matrix_db',
  password: 'matrix',
  port: 5432,
})

const MATRIX_PORT  = 5001;

const matrix_server = net.createServer( socket => {
    socket.on('data', data => {
        let date = Date.now();
        let msg = JSON.parse(data);
        msg.timestamp = date;
        
        console.log(msg);
        insert(msg);

    });
    socket.end();
});

function insert(msg){
    pool.query('INSERT into matrix_schema.matrix_table (id_scanner, id_good_read, code, timestamp) VALUES ($1,$2,$3,$4)',
               [msg.id_scanner,msg.id_good_read,msg.code,msg.timestamp], (err,result) => {
        if(err){
            console.log(err);
        }
    });
}

matrix_server.listen(MATRIX_PORT, () => {
    console.log(`matrix_server listening on ${MATRIX_PORT}`);
});
