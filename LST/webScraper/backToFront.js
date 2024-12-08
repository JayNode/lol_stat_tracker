const express = require('express');
const cors = require('cors');
const router = express();
const PORT = 3000; // Ensure this matches your frontend fetch URL

router.use(cors());
router.use(express.json());

// Mock data for testing
const mockData = [
  { name: "Aatrox", winRate: "49.8%" },
  { name: "Ahri", winRate: "52.3%" },
  { name: "Akali", winRate: "47.2%" },
];

router.get('/leagueData/', async (req, res) => {
  res.json(mockData); // Send mock data or real scraped data here
});

router.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
