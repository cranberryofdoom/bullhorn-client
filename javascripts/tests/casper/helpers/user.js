var credentials = require('./credentials');

exports.signUp = function(signIn){
	casper.then(function(){
		casper.waitForSelector('form#form-sign-up', function(){
			if (signIn === false){
				this.fillSelectors('form#form-sign-up', {
					'input[name="signIn"]': 'false'
				}, false);
			}
			this.fill('form#form-sign-up', credentials.signUp(), true);
		});
		
	});
};

exports.signIn = function(){
	casper.then(function(){
		casper.waitForSelector('form#form-sign-in', function(){
			this.fill('form#form-sign-in', credentials.signIn(), true);
		});
	});
};