const puppeteer = require("puppeteer");

async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://u.gg/lol/tier-list");

  await autoScroll(page);

  await page.waitForNetworkIdle();

  const data = await page.evaluate(() => {
    const elements = document.querySelectorAll(".champion-name");
    const winRates = document.querySelectorAll(".winrate");

    const result = {};
    elements.forEach((element, index) => {
      const championName = element.textContent;
      const championWinRate = winRates[index + 1].textContent;
      result[championName] = championWinRate;
    });

    return result;
  });

  console.log(data);

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
