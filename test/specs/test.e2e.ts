import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'

// run test command: yarn wdio run wdio.conf.ts

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
        await expect(SecurePage.flashAlert).toMatchSnapshot('flashAlert')
    })

    it('tc001', async() => {
      const logo = await $('.et_pb_menu__logo')

      await browser.url('https://ultimateqa.com/complicated-page')
      await logo.waitForDisplayed()
      await browser.saveScreenshot('./screenshots/fullpage.png')
      await logo.saveScreenshot('./screenshots/ttc001.png')
    })

    it('tc002', async() => {
      await browser.url('https://google.com')
      await $('.lnXdpd').saveScreenshot('./screenshots/ttc002.png')
      await $('//input[@id="gbqfbb"]').saveScreenshot('./screenshots/ttc002a.png')
    })
})

