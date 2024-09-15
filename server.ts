import express from "express";
import path from "path";

// Create an Express app
const app = express();

// Serve the static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Route all requests to index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
