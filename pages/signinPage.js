const signinCommands = {  
  signin(email, password) {
    return this
      .waitForElementVisible('@emailInput')
      .setValue('@emailInput', email)
      .setValue('@passwordInput', password)
      .waitForElementVisible('@signinButton')
      .click('@signinButton')
  }
};

export default {  
  url: 'https://cjdocs.herokuapp.com/signin',
  commands: [signinCommands],
  elements: {
    emailInput: {
      selector: 'input[type=email]'
    },
    passwordInput: {
      selector: 'input[name=password]'
    },
    signinButton: {
      selector: 'button[type=submit]'
    }
  }
};