casper.test.begin('Sign In: Test Correct Credentials', 1, function(test){
	var user = require('../helpers/user');

	// start up the page
	casper.start('http://localhost:8000/#/sign_up', function(){
		// sign up the user
		user.signUp(false);
	});

	// click on sign in
	casper.thenClick("a[href*='/#/sign_in']", function(){
		// sign in the user
		user.signIn();
	});

	// check if the right alert returned
	casper.then(function() {
		casper.waitForSelector('.alert', function() {
			var alertMessage = this.getElementInfo('.alert li');
			this.echo(alertMessage.text);
			test.assertTextExists('You are now signed in.', 'Sign in');
		});
	});

	require('utils').dump(casper.steps.map(function(step) {
		return step.toString();
	}));

	casper.run(function() {
		test.done();
	});
});