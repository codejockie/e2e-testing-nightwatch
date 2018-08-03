const url = 'http://todomvc.com/examples/react/#/';

module.exports = {
  'Active filter shows non-completed items'(client) {
    client
      .url(`${url}active'`)
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'My new task')
      .keys(client.Keys.ENTER)
      .assert.containsText('.todo-list li:first-child label', 'My new task')
      .end();
  },
  'Active filter hides completed items'(client) {
    client
      .url(url)
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'My new task')
      .keys(client.Keys.ENTER)
      .click('.todo-list li:first-child .toggle')
      .url(`${url}active`)
      .assert.elementNotPresent('.todo-list li')
      .end();
  },
  'Completed filter only contains completed tasks'(client) {
    client
      .url(url)
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'My new task')
      .keys(client.Keys.ENTER)
      .click('.todo-list li:first-child .toggle')
      .url(`${url}completed`)
      .assert.containsText('.todo-list li:first-child label', 'My new task')
      .end();
  },
  'Completed filter does not contain non-completed tasks'(client) {
    client
      .url(url)
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'My new task')
      .keys(client.Keys.ENTER)
      .url(`${url}completed`)
      .assert.elementNotPresent('.todo-list li')
      .end();
  }
};
