const express = require('express');
const app = express();
const port = 3002;
const path = require('path');

// Serve static files from the root directory
app.use(express.static(__dirname));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
