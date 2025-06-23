import Page from "./page";

class ElementActions extends Page {
    /**
     * Clicks a button identified by its visible text.
     * @param {string} buttonName The exact text displayed on the button.
     */
    public async clickButtonByName(buttonName: string): Promise<void> {
        const selector = `button=${buttonName}`; // WebDriverIO's way to find by visible text
        const buttonElement = await $(selector);
        await buttonElement.click();
    }

    /**
     * Clicks a web element identified by its ID attribute.
     * @param {string} elementId The 'id' attribute value of the element.
     */
    public async clickElementById(elementId: string): Promise<void> {
        const selector = `#${elementId}`; // CSS selector for ID
        const element = await $(selector);
        await element.click();
    }
}

export default new ElementActions()