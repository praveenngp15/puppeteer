module.exports={

    click: async function(page,selector){
        try {
                await page.waitForSelector(selector)
                await page.click(selector)
        } catch (error) {
                throw new Error(`Could not click on Selector ${selector}`)
        }
    },

    getText: async function(page,selector){
        try {
            await page.waitForSelector(selector)
            return await page.$eval(selector,element=>element.innerHTML)
    } catch (error) {
            throw new Error(`Could not get a ext from ${selector}`)
    }
},


    getCount: async function(page,selector){
        try {
            await page.waitForSelector(selector)
            return await page.$$eval(selector,element => element.length)
    } catch (error) {
            throw new Error(`Cannot get count from ${selector}`)
    }


    },

    typeText: async function(page,selector,text){
        try {
            await page.waitForSelector(selector)
            page.type(selector, text)
    } catch (error) {
            throw new Error(`Could not type into Selector :  ${selector} and value is ${text}`)
    }


    },

    waitForText:async function(page,selector,text){

        try {
            await page.waitForSelector(selector)
            await page.waitForFunction((selector ,text)=>{
                    document.querySelector(selector).innerText.includes(text),
                    {},
                    selector,
                    text
            })
            
        } catch (error) {
            throw new Error(`Text:${text} not fount on Selector:${selector}`)
        }
    },

    shouldNotExist:async function(page,selector){

        try {
            //await page.waitFor(!document.querySelector(selector))
            await page.waitForSelector(selector,{hidden:true})
        } catch (error) {
            throw new Error(`Selector ${selector} is visble not as expected`)
        }

    },
    


}