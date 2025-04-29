// public/scripts.js

const socket = io(); // Connect to socket.io server

// Listen for 'number' event
socket.on('number', (msg) => {
  console.log('Random number received:', msg);
  document.getElementById('number').innerText = msg;
});
