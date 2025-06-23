class ElementActions {
    public async clickButtonByName(buttonName: string): Promise<void> {
        const selector = `button=${buttonName}`
        const buttonElement = await $(selector);
        await buttonElement.click();
    }

    public async clickElementById(elementId: string): Promise<void> {
        const selector = `#${elementId}`
        const element = await $(selector)
        await element.click()
    }
}

export default new ElementActions()