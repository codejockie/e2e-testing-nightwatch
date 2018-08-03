const url = 'http://todomvc.com/examples/react/#/';

module.exports = {
  'Caret down completes all tasks if none is selected'(client) {
    client
      .url(url)
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'My new task')
      .keys(client.Keys.ENTER)
      .setValue('.new-todo', 'My other new task')
      .keys(client.Keys.ENTER)
      .click('.toggle-all')
      .assert.containsText('.todo-count', '0 items left')
      .end();
  },

  'Caret down completes all tasks if some are selected'(client) {
    client
      .url(url)
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'My new task')
      .keys(client.Keys.ENTER)
      .setValue('.new-todo', 'My other new task')
      .keys(client.Keys.ENTER)
      .click('.todo-list li:first-child .toggle')
      .click('.toggle-all')
      .assert.containsText('.todo-count', '0 items left')
      .end();
  },

  'Caret down uncompletes all tasks if all are selected'(client) {
    client
      .url(url)
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'My new task')
      .keys(client.Keys.ENTER)
      .setValue('.new-todo', 'My other new task')
      .keys(client.Keys.ENTER)
      .click('.todo-list li:first-child .toggle')
      .click('.todo-list li:nth-child(2) .toggle')
      .assert.containsText('.todo-count', '0 items left')
      .click('.toggle-all')
      .assert.containsText('.todo-count', '2 items left')
      .end();
  }
};
