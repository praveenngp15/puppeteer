const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('Curreny Exchange Test',async ()=>{

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
        await page.goto('http://zero.webappsecurity.com/login.html')
        await page.waitForSelector('#login_form')
        await page.type('#user_login','username')
        await page.type('#user_password','password')
        await page.click('#user_remember_me')
        await page.click('[value="Sign in"]')
        await page.waitForSelector('#settingsBox')

    })


    after(async function () {
        await browser.close();
    })



    it('Display Currency Exchange Form',async function (){
        await page.waitForSelector('.nav.nav-tabs')
        await page.click('#pay_bills_tab')
        await page.waitForSelector('[href="#ui-tabs-3"]')
        await page.click('[href="#ui-tabs-3"]')
    })


    it('Exchange Currency',async ()=>{
        await page.waitForSelector('#pc_currency')
        await page.select('#pc_currency','GBP')
        await page.type('#pc_amount','300')
        await page.click('#pc_inDollars_true')
        await page.click('#purchase_cash')
        await page.waitForSelector('#alert_container')
      })
    





})