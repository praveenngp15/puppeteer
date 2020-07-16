const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('Feedback Test',async ()=>{

    let browser
    let page

    
    before(async function () {
        browser =  await puppeteer.launch(
            {headless:false ,
            slowMo:10,
            devtools:false,
            defaultViewport: null,
            args: ['--start-maximized']
        });
        page = await browser.newPage()
        await page.setDefaultTimeout('10000')
        await page.setDefaultNavigationTimeout('20000')
    })


    after(async function () {
        await browser.close();
    })



    it('Display Feedback Form',async function (){
        await page.goto('http://zero.webappsecurity.com/')
        await page.waitForSelector('#feedback')
        await page.click('#feedback')
       
    })


    it('Submit Feedback form',async ()=>{
        await page.waitForSelector('form')
        await page.type('#name','Praveen')
        await page.type('#email','test@email.com')
        await page.type('#subject','Some Feedback')
        await page.type('#comment','Come comments in text area')
        await page.click('[name="submit"]')
      })

      it('Display Result page',async ()=>{
        await page.waitForSelector('#feedback-title')
        const url = await page.url();
        expect(url).to.include('/sendFeedback.html')
      })




})