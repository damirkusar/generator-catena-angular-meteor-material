module.exports = {
  "Url Test" : function (client) {
    client
      .url("http://127.0.0.1:3000/<%= moduleNameDeCap %>")
      .waitForElementVisible("body", 1000)
      .assert.urlContains('/<%= moduleNameDeCap %>')
      .end();
  }
};
