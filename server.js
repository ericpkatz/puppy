const app = require('express')();
const puppeteer = require('puppeteer');

app.listen(process.env.PORT);


app.get('/', async(req, res, next)=> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://stackoverflow.com');
  const content = await page.content();
  res.send(content);
});
