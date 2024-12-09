const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// // Mock data
// const champions = [
//   { name: "Aatrox", winRate: "49.8%" },
//   { name: "Ahri", winRate: "52.1%" },
// ];

let champions = [];

// API endpoint to serve champions
app.get("/api/champions", (req, res) => {
  res.json(champions);
});

// API endpoint to receive champions data
app.post("/api/champions", (req, res) => {
  const { champions: receivedChampions } = req.body;

  if (Array.isArray(receivedChampions)) {
    champions = receivedChampions; // Replace existing data
    res.status(200).send({ message: "Champions data updated successfully!" });
  } else {
    res.status(400).send({ message: "Invalid data format." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
