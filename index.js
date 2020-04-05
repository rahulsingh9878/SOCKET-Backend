var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log(msg);
    io.emit('chat message', msg);
  });
  socket.on('start', function(msg){
    console.log(msg);
    io.emit('start', msg);
  });
  socket.on('reset', function(msg){
    console.log(msg);
    io.emit('reset', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
