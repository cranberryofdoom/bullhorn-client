var sys = require('sys');
var exec = require('child_process').exec;

exports.run = function(callback){
	exec("printf \"select 9\n flushdb\" | redis-cli --pipe", function (error, stdout, stderr) {
		if (error !== null) {
			console.log('exec error: ' + error);
		}
		callback();
	});
};