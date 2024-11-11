const puppeteer = require('puppeteer');

async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://u.gg/lol/tier-list');

  const data = await page.evaluate(() => {
    const winRates = document.querySelectorAll('.winrate');
    
    const result = [];
    winRates.forEach((winRateElement, index) => {
      if (index > 0) { // Skip the first item if it's a header
        result.push(winRateElement.textContent);
      }
    });
    
    return result;
  });
  
  console.log(data);

  await browser.close();
}

scrapeData();
