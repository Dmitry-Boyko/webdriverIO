// yarn wdio run wdio.conf.ts --spec ./test/specs/section4/*.ts
import elementActions from "../../pageobjects/elementActions"
import helpers from "../../pageobjects/helper"
// import { expect, assert } from 'chai'

describe ('elementsverification and interaction check', () => {
  it('wait until element present', async () => {
    await browser.url('https://the-internet.herokuapp.com/dynamic_controls')
    var elem = await $('input[type="text"]')
   await $('button=Enable').click()
   await elem.waitForEnabled({
    timeout: 10000
   })
   console.log(`Result: ${await $('#message').getText()}`)
  })

  it('check if element present', async () => {
    await browser.url('https://the-internet.herokuapp.com/dynamic_loading/2')
    var elem = await $('#finish')
    await elementActions.clickButtonByName('Start')
    await helpers.waitUntilDisappear('Loading')
    // console.log('Check for finish element after the Start is clicked')
    // console.log(await elem.isExisting())
    // await browser.pause(1000)
    // var elem = $('#finish')
    // console.log("Check completed")
    // console.log(await elem.isExisting())
    await expect(elem).toHaveText('Hello World!')
  })

  it('verify checkbox t1', async () => {
    await browser.url('https://the-internet.herokuapp.com/checkboxes')
    const box1 = await $$('input[type="checkbox"]')[0]
    console.log('Verify first checkbox')
    console.log(await box1.isSelected())

    const box2 = await $$('input[type="checkbox"]')[1]
    console.log('Verify second checkbox')
    console.log(await box2.isSelected())
  })

    it('verify checkbox t2', async () => {
    await browser.url('https://the-internet.herokuapp.com/checkboxes')
    const box1 = await $$('input[type="checkbox"]')[0]
    console.log('Verify first checkbox')
    await expect (box1).toBeSelected()

    const box2 = await $$('input[type="checkbox"]')[1]
    console.log('Verify first checkbox')
    await expect (box2).toBeSelected()
  })

  it('select checkbox', async () => {
    await browser.url('https://the-internet.herokuapp.com/checkboxes')
    const checkbox = await $$('input[type="checkbox"]')
    await helpers.selectCheckbox(checkbox[0])
    await helpers.isCheckboxChecked(checkbox[0])
  })

  it('should verify checkbox is checked', async () => {  
    await browser.url('https://the-internet.herokuapp.com/checkboxes')
    const checkbox = await $$('input[type="checkbox"]')
    await checkbox[0].click()

    const isChecked = await checkbox[0].isSelected()
    // await assert.isOk(isChecked, 'Error: Checkbox is not selected')
    await browser.pause(5000)
  })
})