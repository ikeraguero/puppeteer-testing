class LoginPage {
  constructor(page) {
    this.page = page
    this.BASE_URL = 'https://www.saucedemo.com/'
    this.LOGIN_CONTAINER = '.login_container'
    this.LOGIN_USERNAME_INPUT = '#user-name'
    this.LOGIN_PASSWORD_INPUT = '#password'
    this.LOGIN_BUTTON = '#login-button'
  }

  async open() {
    await this.page.goto(this.BASE_URL)
    await page.waitForSelector()
  }

  async login(username, password) {
    await this.page.type(this.LOGIN_USERNAME_INPUT, username)
    await this.page.type(this.LOGIN_PASSWORD_INPUT, password)
    await this.page.click(this.LOGIN_BUTTON)
  }
}

module.exports = LoginPage