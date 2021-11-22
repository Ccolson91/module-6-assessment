
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

describe('button clicks should work', () => {
    test('See all button shows all robots', async () => {
        const seeAll = await driver.findElement(By.id('see-all'))
        const display = await seeAll.isDisplayed()
        expect(display).toBe(true)
    })
    test('draw button populates choices', async () => {
        const draw = await driver.findElement(By.id('draw'))
        const choices = await draw.isDisplayed()
        expect(choices).toBe(true)
    })
})