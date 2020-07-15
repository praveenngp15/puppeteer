const puppeteer = require('puppeteer')
describe('My First Pippeteer Test',()=>{

    it('Launch the Browser',async()=>{

        const browser = await puppeteer.launch({headless:false ,slowMo:1000,devtools:true});
        const page = await browser.newPage()
        await page.goto('http://example.com/')
        await page.waitFor(5000)
        await page.waitForSelector('h1')
        await page.reload()
        await page.waitForSelector('h1')
        await page.goForward()
        await page.goBack()
        await browser.close()
    })

})