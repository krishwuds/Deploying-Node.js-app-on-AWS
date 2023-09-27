const express = require('express');
const app = express();
const port = 3000; // You can change this to any available port you prefer

// Define a route that responds with your message
app.get('/', (req, res) => {
  res.send('Hi, it\'s me Krishan Lal. Welcome to my page. Thank you.');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


