const puppeteer = require("puppeteer");

(async function() {
    const browser = await puppeteer.launch({ headless : false })
    const page = await browser.newPage()
    await page.goto("http://browse.auction.co.kr/search?keyword=AUCT&pid=346")

    await page.waitForSelector(".text--title")
    const text = await page.evaluate(() => {
        return document.querySelector("#section--inner_content_body_container > div:nth-child(2) > div > div > div.section--itemcard > div.section--itemcard_info > div.section--itemcard_info_major > div.area--itemcard_title > span > a > span.text--title").innerText
    })
    console.log(text)
    browser.close()
})()