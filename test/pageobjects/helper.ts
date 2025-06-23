import type { ChainablePromiseElement } from 'webdriverio'

class Helpers {
  async waitUntilDisappear(selector: string, timeout = 5000): Promise<void> {
    const elem = await $(selector)

    const isDisplayed = await elem.isDisplayed().catch(() => false)
    if (isDisplayed) {
      await browser.waitUntil(
        async () => !(await elem.isExisting()),
        {
          timeout,
          timeoutMsg: `Element '${selector}' did not disappear within ${timeout}ms`
        })
    }
  }

  async selectCheckbox(checkbox: ChainablePromiseElement): Promise<void> {
    const isSelected = await checkbox.isSelected();
    if (!isSelected) {
      await checkbox.click();
   }
  }

  async isCheckboxChecked(checkbox: ChainablePromiseElement): Promise<boolean> {
    return await checkbox.isSelected();
  }
}

export default new Helpers()


