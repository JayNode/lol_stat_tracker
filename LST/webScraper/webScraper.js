const puppeteer = require("puppeteer");
const axios = require("axios");

async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://u.gg/lol/tier-list"), { timeout: 60000 };

  await autoScroll(page);
  await page.waitForNetworkIdle();

  const winData = await page.evaluate(() => {
    const winRates = document.querySelectorAll(".winrate");
    return Array.from(winRates)
      .slice(1)
      .map((el) => el.textContent); // Skip header
  });

  const charData = await page.evaluate(() => {
    const champions = document.querySelectorAll(".champion-name");
    return Array.from(champions).map((el) => el.textContent);
  });

  const roleData = await page.evaluate(() => {
    const roles = document.querySelectorAll(".role > div > img");
    return Array.from(roles).map((el) => el.getAttribute("alt"));
  });

  const tierData = await page.evaluate(() => {
    const tiers = document.querySelectorAll(".tier > span > b");
    return Array.from(tiers).map((el) => el.textContent);
  });

  const pickData = await page.evaluate(() => {
    const picks = document.querySelectorAll(".pickrate");
    return Array.from(picks)
      .slice(1)
      .map((el) => el.textContent); // Skip header
  });

  const banData = await page.evaluate(() => {
    const banRates = document.querySelectorAll(".banrate");
    return Array.from(banRates)
      .slice(1)
      .map((el) => el.textContent); // Skip header
  });

  const matchesData = await page.evaluate(() => {
    const matches = document.querySelectorAll(".matches");
    return Array.from(matches)
      .slice(1)
      .map((el) => el.textContent); // Skip header
  });

  const championsData = charData.map((name, index) => ({
    name,
    winRate: winData[index] || "N/A",
    role: roleData[index] || "N/A",
    tier: tierData[index] || "N/A",
    pickRate: pickData[index] || "N/A",
    banRate: banData[index] || "N/A",
    matches: matchesData[index] || "N/A",
  }));

  console.log(championsData);

  // Send data to the backend
  try {
    await axios.post("http://localhost:3001/api/champions", {
      champions: championsData,
    });
    console.log("Data sent to backend successfully!");
  } catch (error) {
    console.error("Error sending data to backend:", error);
  }

  await browser.close();
}

async function autoScroll(page, maxScrolls) {
  await page.evaluate(async (maxScrolls) => {
    await new Promise((resolve) => {
      var totalHeight = 0;
      var distance = 100;
      var scrolls = 0; // scrolls counter
      var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        scrolls++; // increment counter

        // stop scrolling if reached the end or the maximum number of scrolls
        if (
          totalHeight >= scrollHeight - window.innerHeight ||
          scrolls >= maxScrolls
        ) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  }, maxScrolls); // pass maxScrolls to the function
}

scrapeData();
