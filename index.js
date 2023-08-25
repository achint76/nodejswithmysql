const express = require('express');
const app = express();
const port = 5000; // You can specify your desired port number

// Middleware to parse JSON requests
app.use(express.json());

// Import your userRoutes file
const userRoutes = require('./routes/userRoutes');

// Use the imported userRoutes with the '/users' prefix
app.use('/users', userRoutes);

// Handle any other routes or middleware here...

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});