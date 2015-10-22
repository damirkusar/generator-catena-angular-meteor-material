module.exports = {
  "Change Password view redirects if not loged in" : function (client) {
    client
      .url("http://127.0.0.1:3000/changepw")
      .waitForElementVisible("body", 1000)
      .assert.urlContains('/login')
      .end();
  },
  "Change Password view correct after login in" : function (client) {
    client
      .url("http://127.0.0.1:3000/login")
      .waitForElementVisible("body", 1000)
      .setValue('#usernameInput','admin')
      .setValue('#passwordInput','admin')
      // .click('#signIn')
      // .submitForm('form')
      .keys(['\uE006'], function(){
        console.log("press enter")
      })
      .pause(1000)
      .url("http://127.0.0.1:3000/changepw")
      .waitForElementVisible("body", 1000)
      .waitForElementVisible("form", 1000)
      .waitForElementVisible('input[type="password"]', 1000)
      .waitForElementVisible('form > button', 1000)
      .verify.containsText('form > button', 'CHANGE PASSWORD')
      .end();
  },
  "Forgot Password view correct" : function (client) {
    client
      .url("http://127.0.0.1:3000/forgotpw")
      .waitForElementVisible("body", 1000)
      .waitForElementVisible("form", 1000)
      .waitForElementVisible('input[type="email"]', 1000)
      .waitForElementVisible('form > button', 1000)
      .verify.containsText('form > button', 'RESET PASSWORD')
      .end();
  },
  "Login view correct" : function (client) {
    client
      .url("http://127.0.0.1:3000/login")
      .waitForElementVisible("body", 1000)
      .waitForElementVisible("form", 1000)
      .waitForElementVisible('input[id="usernameInput"]', 1000)
      .waitForElementVisible('input[id="passwordInput"]', 1000)
      .waitForElementVisible('form > button', 1000)
      .verify.containsText('form > button', 'SIGN IN')
      .end();
  },
  "Register view correct" : function (client) {
    client
      .url("http://127.0.0.1:3000/register")
      .waitForElementVisible("body", 1000)
      .waitForElementVisible("form", 1000)
      .waitForElementVisible('input[type="text"]', 1000)
      .waitForElementVisible('input[type="email"]', 1000)
      .waitForElementVisible('input[type="password"]', 1000)
      .waitForElementVisible('form > button', 1000)
      .verify.containsText('form > button', 'CREATE ACCOUNT')
      .end();
  },
  "Reset Password view correct" : function (client) {
    client
      .url("http://127.0.0.1:3000/resetpw/1")
      .waitForElementVisible("body", 1000)
      .waitForElementVisible("form", 1000)
      .waitForElementVisible('input[type="password"]', 1000)
      .waitForElementVisible('form > button', 1000)
      .verify.containsText('form > button', 'RESET PASSWORD')
      .end();
  },
};
