const puppeteer = require('puppeteer');

async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://u.gg/lol/tier-list');

  const data = await page.evaluate(() => {
    const elements = document.querySelectorAll('.champion-name');
    const winRates = document.querySelectorAll('.winrate');
    
    const result = {};
    elements.forEach((element, index) => {
      const championName = element.textContent;
      const championWinRate =  winRates[index+1].textContent;
      result[championName] = championWinRate;
    });
  
    return result;
  });
  

  console.log(data);

  await browser.close();
}

scrapeData();