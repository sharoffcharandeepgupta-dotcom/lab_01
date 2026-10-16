
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const STUDENT_NAME = "Sharoff Charan deep Gupta";
const SECTION = "CSE GENAI 2C";

// Route 1: Home
app.get("/", (request, response) => {
  response.status(200).send("Welcome to my Lab 1 Express server!");
});

// Route 2: About
app.get("/about", (request, response) => {
  response.status(200).json({
    name: STUDENT_NAME,
    section: SECTION
  });
});

// Route 3: Current date and time
app.get("/time", (request, response) => {
  response.status(200).json({
    currentDateTime: new Date().toISOString()
  });
});

// 404 handler for unknown routes
app.use((request, response) => {
  response.status(404).json({
    message: "404 - Route not found"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
