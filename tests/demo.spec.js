const puppeteer = require('puppeteer')
const mocha = require('mocha')
const expect = require('expect.js')
const { timeout } = require('puppeteer')

const { setTimeout } = require('node:timers/promises')

describe('Puppeteer Demo', () => {
  let browser
  let page
  let browserOptions = {
    headless: false,
    timeout: 15000,
  }

  let viewportOptions = {
    width: 1280,
    height: 720,
  }

  beforeEach(async () => {
    browser = await puppeteer.launch(browserOptions)
    page = await browser.newPage()
    await page.setViewport(viewportOptions)
  })

  afterEach(async () => {
    await browser.close()
  })

  it('First test', async () => {
    await page.goto('https://example.com/')
    await setTimeout(2000)

    const pageTitle = await page.title()
    const pageUrl = await page.url()

    //assertions
    expect(pageTitle).to.contain('Example Domain')
    expect(pageUrl).to.contain('example.com')
    await page.waitForSelector('h1')

  })

  it('Second test', async () => {
    await page.goto('https://example.com/')
    await setTimeout(2000)

    console.log(await browser.version())
    console.log(await page.title())
    console.log(await page.url())
    console.log(await page.viewport())
  })
})
