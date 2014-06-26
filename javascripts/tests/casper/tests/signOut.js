casper.test.begin('Sign Out', 1, function(test){
	var user = require('../helpers/user');

	// start up the page
	casper.start('http://localhost:8000/#/sign_up', function(){
		// sign up the user
		user.signUp();
	});

	// click on sign out
	casper.thenClick("#link-sign-out", function(){
		// sign out the user
		user.signOut();
	});

	// check if the right alert returned
	casper.then(function() {
		casper.waitForSelector('.alert', function() {
			var alertMessage = this.getElementInfo('.alert li');
			this.echo(alertMessage.text);
			test.assertTextExists('You have been signed out.', 'Sign out');
		});
	});

	casper.run(function() {
		test.done();
	});
});