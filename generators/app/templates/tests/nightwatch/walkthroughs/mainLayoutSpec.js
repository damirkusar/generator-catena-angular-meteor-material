module.exports = {
  "AppTitle available" : function (client) {
    client
      .url("http://127.0.0.1:3000")
      .waitForElementVisible("body", 1000)
      .assert.title("http://127.0.0.1:3000/")
      .verify.containsText('#toolbarTitle', '<%= appName %>')
      .end();
  },
  "Login & SignUp Button available if user not logged in" : function (client) {
    client
      .url("http://127.0.0.1:3000")
      .waitForElementVisible("body", 1000)
      .verify.containsText('div > div > a:nth-child(1)', 'LOGIN')
      .verify.containsText('div > div > a:nth-child(2)', 'SIGN UP')
      .verify.containsText('div > div > a:first-child', 'LOGIN')
      .verify.containsText('div > div > a:last-child', 'SIGN UP')
      .end();
  },
  "Change Password & Logout Button available if user logged in" : function (client) {
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
    .verify.containsText('div > div > a:nth-child(1)', 'LOGOUT')
    .verify.containsText('div > div > a:nth-child(2)', 'CHANGE PASSWORD')
    .verify.containsText('div > div > a:first-child', 'LOGOUT')
    .verify.containsText('div > div > a:last-child', 'USER: ADMIN')
    .end();
  },
};
