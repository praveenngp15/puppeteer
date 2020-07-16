const puppeteer = require('puppeteer')

describe('Login Test',async ()=>{

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



    it('Login Test - Valid Credentials',async function (){
        await page.goto('http://zero.webappsecurity.com/')
        await page.waitForSelector('#signin_button')
        await page.click('#signin_button')
        await page.waitForSelector('#login_form')
        await page.type('#user_login','praveenngp')
        await page.type('#user_password','praveenngp')
        await page.click('#user_remember_me')
        await page.click('[value="Sign in"]')
        await page.waitForSelector('[class="alert alert-error"]')
    })


    it('Login Test - InValid Credentials',async ()=>{
        await page.goto('http://zero.webappsecurity.com/')
        await page.waitForSelector('#signin_button')
        await page.click('#signin_button')
        await page.waitForSelector('#login_form')
        await page.type('#user_login','username')
        await page.type('#user_password','password')
        await page.click('#user_remember_me')
        await page.click('[value="Sign in"]')
        await page.waitForSelector('#settingsBox')
      })





})