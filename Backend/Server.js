const io = require('socket.io')(3001);

let id = 1;
let messages = [{ id: 1, name: 'Host', message: 'Hi from Server' }];

io.on('connection', (socket) => {
  socket.emit('chat-message', messages);
  socket.on('send-message', (msg) => {
    messages.push(msg);
    console.log(msg);
    socket.broadcast.emit('chat-message', messages);
  });
});
