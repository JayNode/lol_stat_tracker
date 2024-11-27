const puppeteer = require("puppeteer");

async function scrapeData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://u.gg/lol/tier-list", { timeout: 60000 });

  await autoScroll(page);
  await page.waitForNetworkIdle();

  const winData = await page.evaluate(() => {
    const winRates = document.querySelectorAll(".winrate");

    const result = [];
    winRates.forEach((winRateElement, index) => {
      if (index > 0) {
        result.push(winRateElement.textContent);
      }
    });

    return result;
  });

  const charData = await page.evaluate(() => {
    const champions = document.querySelectorAll(".champion-name");

    const result = [];
    champions.forEach((champElement, index) => {
      result.push(champElement.textContent);
    });

    return result;
  });

  

  const roleData = await page.evaluate(() => {
    const roles = document.querySelectorAll(".role > div > img");

    const result = [];
    roles.forEach((roleElement, index) => {
      result.push(roleElement.getAttribute("alt"));
    });

    return result;
  });

  const banData = await page.evaluate(() => {
    const banDataRates = document.querySelectorAll(".banrate");

    const result = [];
    banDataRates.forEach((banRateElement, index) => {
      if (index > 0) {
        result.push(banRateElement.textContent);
      }
    });

    return result;
  });

  const matchesData = await page.evaluate(() => {
    const matchesData = document.querySelectorAll(".matches");

    const result = [];
    matchesData.forEach((matchesDataElement, index) => {
      if (index > 0) {
        result.push(matchesDataElement.textContent);
      }
    });

    return result;
  });

  const tierData = await page.evaluate(() => {
    const tiers = document.querySelectorAll(".tier > span > b");

    const result = [];
    tiers.forEach((tierElement, index) => {
      result.push(tierElement.textContent);
    });

    return result;
  });

  const pickData = await page.evaluate(() => {
    const picks = document.querySelectorAll(".pickrate");

    const result = [];
    picks.forEach((pickElement, index) => {
      if (index > 0) {
        result.push(pickElement.textContent);
      }
    });
    
    return result;
  });

  console.log(winData);
  console.log(charData);
  console.log(roleData);
  console.log(banData);
  console.log(matchesData);
  console.log(pickData);
  console.log(tierData);

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
