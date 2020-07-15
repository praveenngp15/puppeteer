const puppeteer = require('puppeteer')
describe('My First Pippeteer Test',()=>{

    it('Launch the Browser',async()=>{

        const browser = await puppeteer.launch({headless:false ,slowMo:10,devtools:false});
        const page = await browser.newPage()
        await page.goto('https://devexpress.github.io/testcafe/example/')
        await page.type('#developer-name','Praveen',{delay:0})
        await page.waitFor(5000)
        await page.click('#tried-test-cafe',{clickCount:1})
        await page.select('#preferred-interface','JavaScript API')
        await page.type('#comments' , 'Let fill this with some message')
        await page.click('#submit-button',{clickCount:1})
        await page.waitForSelector('.result-content')
        await page.waitFor(5000)
        await browser.close();
        
    })

})