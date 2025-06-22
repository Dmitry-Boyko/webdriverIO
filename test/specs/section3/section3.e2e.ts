describe('section 3', () => {
  // it('tc001', async () => {
  //   await browser.url('https://google.com')
  //   await browser.debug()
  // })
  it('authen', async () => {
    const paragraph = await $('p')
    await browser.url('https://admin:admin@the-internet.herokuapp.com/basic_auth')
    // username:password@url
    expect(paragraph).toBeDisabled
    expect(paragraph).toHaveText("Congratulations! You must have the proper credentials.")
  })
})