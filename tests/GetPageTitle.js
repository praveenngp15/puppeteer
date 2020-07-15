const puppeteer = require('puppeteer');
const { expect } = require('chai');
const epext = require('chai').expect
describe('My First Pippeteer Test',()=>{

    it('Launch the Browser',async()=>{

        const browser = await puppeteer.launch({headless:true ,slowMo:10,devtools:false});
        const page = await browser.newPage()
        await page.setDefaultTimeout('10000')
        await page.setDefaultNavigationTimeout('20000')
        await page.goto('http://example.com/')
        const title = await page.title();
        const url = await page.url()
        const text = await page.$eval('h1',element=>element.textContent)
        const count = await page.$$eval('p',element => element.length)
        expect(title).to.be.a('string','Example Domain')
        expect(url).to.include('example.com')
        expect(text).to.be.a('string','Example Domain')
        expect(count).to.eql(2)

        await browser.close()
    })

})