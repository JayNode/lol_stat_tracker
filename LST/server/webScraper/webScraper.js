const puppeteer = require("puppeteer");

async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://u.gg/lol/tier-list");

  const data = await page.evaluate(() => {
    const champs = document.querySelectorAll(".champion-name");
    // const winRates = document.querySelectorAll(".winrate");

    const result = {};
    champs.forEach((champElement, index) => {
      const championName = champElement.textContent;
      console.log(championName);
      // const championWinRate =  winRates[index+1].textContent;
      result[championName] = championName;
    });

    return result;
  });

  console.log(data);

  await browser.close();
}

scrapeData();
