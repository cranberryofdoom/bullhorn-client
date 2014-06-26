casper.test.begin('Sign Up: Test Correct Credentials', 1, function(test){
	var user = require('../helpers/user');

	// start up the page
	casper.start('http://localhost:8000/#/sign_up', function(){
		// sign up the user
		user.signUp();
	});
	
	// check if the right alert returned
	casper.then(function() {
		casper.waitForSelector('.alert', function() {
			var alertMessage = this.getElementInfo('.alert li');
			this.echo(alertMessage.text);
			test.assertTextExists('Account created successfully!', 'Sign up');
		});
	});

	casper.run(function() {
		test.done();
	});
});