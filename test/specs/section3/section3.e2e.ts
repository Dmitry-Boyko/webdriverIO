describe('section 3', () => {
  // it('tc001', async () => {
  //   await browser.url('https://google.com')
  //   await browser.debug()
  // })

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
    await browser.debug()
    await $('button=Add Element').click()
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
})