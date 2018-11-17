module.exports = {
  'User can sign in'(client) {
    const signinPage = client.page.signinPage();
    const instancesPage = client.page.instancesPage();

    signinPage
      .navigate()
      .signin(process.env.EMAIL, process.env.PASSWORD);

    instancesPage.expect.element('@homepageWelcomeTitle').text.to.contain('Welcome to the CJDocs Home!');

    client.end();
  }
};