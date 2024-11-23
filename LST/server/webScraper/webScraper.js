const puppeteer = require('puppeteer');

async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://u.gg/lol/tier-list', { timeout: 60000 }); // Timeout set to 60 seconds

  await autoScroll(page);
  
  await page.waitForNetworkIdle();
  
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

async function autoScroll(page, maxScrolls){
  await page.evaluate(async (maxScrolls) => {
      await new Promise((resolve) => {
          var totalHeight = 0;
          var distance = 100;
          var scrolls = 0;  // scrolls counter
          var timer = setInterval(() => {
              var scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;
              scrolls++;  // increment counter

              // stop scrolling if reached the end or the maximum number of scrolls
              if(totalHeight >= scrollHeight - window.innerHeight || scrolls >= maxScrolls){
                  clearInterval(timer);
                  resolve();
              }
          }, 100);
      });
  }, maxScrolls);  // pass maxScrolls to the function
}

scrapeData();
