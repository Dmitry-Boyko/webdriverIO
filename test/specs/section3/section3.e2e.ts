// yarn wdio run wdio.conf.ts --spec ./test/specs/section3/*.ts
import elementActions from "../../pageobjects/elementActions"

describe('section 3', () => {

  it('authentication', async () => {
    const paragraph = await $('p')
    await browser.url('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    // username:password@url - how to assign into fileds with authentication
    // await browser.debug() - 1 min wait
    expect(paragraph).toBeDisabled
    expect(paragraph).toHaveText("Congratulations! You must have the proper credentials.")
  })

  it('count inputs 1', async () => {
    await browser.url('https://www.saucedemo.com/')
    const elemCount = await $$('<input />').length
    console.log(`Number of inputs fields:  ${await elemCount}`)
  })

   it('read element by number in array', async () => {
    await browser.url('https://the-internet.herokuapp.com/')
    const elemCount = await $$('<li />')[1]
    console.log(`Number of inputs fields:  ${await elemCount.getText()}`)
  })

  it('find the last name of element on the page', async () => {
    await browser.url('https://jquery.com/')
    const elements = await $$('.menu-item')
    const element = elements[await elements.length -1]
    console.log('Lst element: ' + await element.getText())
  })

  it('find the name of element on the page', async () => {
    await browser.url('https://jquery.com/')
    const elements = await $$('header')
    console.log(`Found ${elements.length} <header> elements`)

    if (await elements.length > 2) {
        const text = await elements[2].getText()
        console.log(`Third element: ${text}`)
    } else {
        console.warn('Less than 3 <header> elements found — check the selector or page structure.')
    }
  })

  it('find the last name of element on the page', async () => {
    await browser.url('https://jquery.com/')
    const elements = await $$('.menu-item') 
    console.log("All item names: ")
    for (const item of elements) {
    const text = await item.getText()
    console.log(text)
    }
  })

  it('map -> google hiperlinks', async () => {
    await browser.url('https://google.com/')
    var elems = await $$('<a />')
    const result = []
    for (const item of elems) {
      result.push(await item.getAttribute('href'))
    }
    console.log('Links on the webpage: ')
    console.log((result))
  })

   it('map -> scrolling', async () => {
    await browser.url('https://the-internet.herokuapp.com/')
    await browser.saveScreenshot('./screenshots/tc-before.png')

    await $('#page-footer').scrollIntoView()
    await browser.saveScreenshot('./screenshots/tc-after.png')
  })

  it('click on the button', async () => {
    await browser.url('https://the-internet.herokuapp.com/add_remove_elements/')
    //await $('button=Add Element').click()
    await elementActions.clickButtonByName('Add Element')
    await browser.debug()
  })
  it('input text', async () => {
    await browser.url('https://jquery.com/')
    await $('[name="s"]').setValue('My test')
    await $('[name="s"]').saveScreenshot('./screenshots/tc-text-input.png')
  })

  it('add input text', async () => {
    await browser.url('https://jquery.com/')
    await $('[name="s"]').setValue('My test')
    await $('[name="s"]').saveScreenshot('./screenshots/tc-text-input1.png')
    await $('[name="s"]').addValue(' is crazy')
    await $('[name="s"]').saveScreenshot('./screenshots/tc-text-input2.png')
    await $('[name="s"]').clearValue()
    await $('[name="s"]').saveScreenshot('./screenshots/tc-text-input-clear.png')
  })

  it('keyboard key action', async () => {
    await browser.url('https://jquery.com/')
    await $('[name="s"]').click()
    await browser.keys("footprint")
    await $('[name="s"]').saveScreenshot('./screenshots/tc-footprint.png')
     await browser.keys("\uE003\uE003\uE003\uE003\uE003") // '\uE003' => backScape key
    await $('[name="s"]').saveScreenshot('./screenshots/tc-foot.png')
  })

  it('mouse hover', async () => {
    await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await $('[name="username"]').setValue('Admin')
    await $('[name="password"]').setValue('admin123')
    await $('.orangehrm-login-button').click()

    await $('span=Admin').moveTo()
    await browser.pause(5000)
    await $('span=My Info').moveTo()
    await browser.pause(5000)
    await $('span=Recruitment').click()
    await browser.pause(5000)
  })

  it('dropdown-list', async () => {
    await browser.url('https://the-internet.herokuapp.com/dropdown')
    await $('#dropdown').selectByAttribute('value', '1')
    await $('#dropdown').selectByIndex(2)
    await $('#dropdown').selectByVisibleText('Option 1')
  })

  it('should focus the text field after click', async () => {
    await browser.url('https://the-internet.herokuapp.com/dropdown')

    const input = await $('#draggable');
    await input.click();

    const isFocused = await input.isFocused();
    expect(isFocused).toBe(true); // WebdriverIO's built-in expect
  })

  it('drag-and-drop', async () => {
    await browser.url('https://jqueryui.com/resources/demos/droppable/default.html')
    await $('#draggable').dragAndDrop(await $('#droppable'))
    await browser.pause(5000)
  })

  it('upoad -download', async () => {
    await browser.url('https://the-internet.herokuapp.com/upload')
    await $('#file-upload').addValue('C:/workspace/Udemy/webdriverIO/screenshots/tc-foot.png')
    await $('#file-submit').click()

    const elem = await $('#uploaded-files')
    await expect(elem).toHaveText('tc-foot.png')
  })
})