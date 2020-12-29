const io = require('socket.io')(3001);

const users = {};
const messages = [];

io.on('connection', (socket) => {
  socket.emit('chat-message', messages);
  socket.on('send-message', (msg) => {
    messages.push(msg);
    console.log(msg);
    socket.broadcast.emit('chat-message', messages);
  });
});
