const puppeteer = require('puppeteer')
const mocha = require('mocha')
const expect = require('expect.js')
const { timeout } = require('puppeteer')

const { setTimeout } = require('node:timers/promises')

describe('E2E Test Demo', () => {
  let browser
  let page
  let browserOptions = {
    headless: false,
    timeout: 15000,
    devtools: true,
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

  it('Eshop flow', async () => {
    await page.goto('https://www.saucedemo.com/')
    await page.waitForSelector('.login_container')

    // submit login form
    await page.type('#user-name', 'standard_user')
    await page.type('#password', 'secret_sauce')
    await page.click('#login-button')

    // open product detail
    await page.click('#item_4_title_link')

    // add to cart
    await page.click('#add-to-cart')

    // go to shopping cart
    await page.click('.shopping_cart_link')
    await page.waitForSelector('.cart_desc_label')

    // go to checkout
    await page.click('#checkout')

    // fill the info
    await page.type('#first-name', 'Peter')
    await page.type('#last-name', 'Marks')
    await page.type('#postal-code', '123')
    await page.click('.submit-button')

    //TODO: Assert that data is there
    await page.click('#finish')

    // assertion

    await page.waitForSelector('.complete-header')
    await page.waitForSelector('#back-to-products')
  })
})

async function logTitle(page) {
  console.log('Log from custom function: ' + (await page.title()))
}