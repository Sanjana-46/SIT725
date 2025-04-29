// index.js

const express = require('express');
const app = express();
const http = require('http').createServer(app); // Create HTTP server
const io = require('socket.io')(http); // Attach socket.io

app.use(express.static('public')); // Serve static files

// Socket connection handler
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  // Emit random number every 1 second
  setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 100);
    socket.emit('number', randomNumber);
  }, 1000);
});

// Start the server
const PORT = 3000;
http.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
