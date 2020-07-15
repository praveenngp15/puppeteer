const puppeteer = require('puppeteer');
const { expect } = require('chai');
const epext = require('chai').expect
describe('My First Pippeteer Test',()=>{

    it('Launch the Browser',async()=>{

        const browser = await puppeteer.launch({headless:false ,slowMo:10,devtools:false});
        const page = await browser.newPage()
        await page.setDefaultTimeout('10000')
        await page.setDefaultNavigationTimeout('20000')
        await page.goto('http://zero.webappsecurity.com/')
        await page.waitForXPath('//*[@id="searchTerm"]')
        await page.type('#searchTerm','Hello World',{delay: 200})
        await page.keyboard.press('Enter',{delay: 10})
        await page.waitFor(5000)
        await page.goBack();
        await page.waitForSelector('#signin_button')
        await page.click('#signin_button');
        await page.waitFor(()=> !document.querySelector('#signin_button'))
        //await page.waitForSelector('#signin_button', {hidden:true,timeout:5000})

        await browser.close()
    })

})