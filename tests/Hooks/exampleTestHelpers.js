const puppeteer = require('puppeteer');
const { expect } = require('chai');
const epext = require('chai').expect

const click = require('../../lib/helpers').click
const getText = require('../../lib/helpers').getText
const getCount = require('../../lib/helpers').getCount
const waitForText = require('../../lib/helpers').waitForText
const shouldNotExist = require('../../lib/helpers').shouldNotExist

describe('My First Pippeteer Test',()=>{

    it('Launch the Browser',async()=>{

        const browser = await puppeteer.launch({headless:false ,slowMo:10,devtools:false});
        const page = await browser.newPage()
        await page.setDefaultTimeout('10000')
        await page.setDefaultNavigationTimeout('20000')
        await page.goto('http://example.com/')
        const title = await page.title();
        const url = await page.url()
        const text = await getText(page,'h1')
        const count = await getCount(page,'h1')
        expect(title).to.be.a('string','Example Domain')
        expect(url).to.include('example.com')
        expect(text).to.be.a('string','Example Domain')
        expect(count).to.eql(1) 

        await page.goto('http://zero.webappsecurity.com/')
        await click(page,'#signin_button');
        await shouldNotExist(page,'#signin_button');

        await browser.close()
    })

})