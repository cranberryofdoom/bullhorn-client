var sys = require('sys');
var spawn = require('child_process').spawn;

function run(cmd, cb) {
	var command = spawn(cmd, ['casper/tests', '-type', 'f', '-name', '*.js']);
	var result = '';
	command.stdout.on('data', function(data) {
		result += data.toString();
	});
	command.on('close', function(code) {
		cb(result);
	});
}

run('find', function(results) {
	var files = results.trim().split('\n');
	function tester(i) {
		if ( i < files.length ) {
			var flushdb = require('./flushdb.js');
			flushdb.run(function(){
				var command = spawn('casperjs', ['test', files[i]]);
				command.stdout.on('data', function(data){
					sys.print(data);
				});
				command.on('close', function(code){
					tester(i + 1);
				});
			});
		}
	}
	tester(0);
});