'use strict';
console.log("MAIN JS RUNNING");
let fs = require('fs')
	,child
	,count = 0
	,exec = require('child_process').exec
	,files = []
	,Pessoa = require('./class_export.js');

class Main{

	static init(){
		var nameCompleted = __filename.split('\\');
		var fileExecuted = nameCompleted[nameCompleted.length - 1];

		// print process.argv
		if(process.argv.length >= 3){

			for(let i = 2; i < process.argv.length; i++){
				files.push(process.argv[i]);
			}
		}

		if(files.length > 0)
		{
			files.forEach((fileName, index) => {
				fs.stat(fileName, (err, stats) => {
					if(stats){
						exec(`node ${fileName}`, (error, stdout, stderr) => {
							console.log(stdout);
						});
					}
				});
			});
		}else{
			fs.readdir(__dirname, (err, data) => {
				if(err) throw err;

				data.forEach((file, index) => {
					if(file.indexOf('.js') != -1 && file.indexOf(fileExecuted) == -1){
						child = exec(`node ${file}`, (error, stdout, stderr) => {
							console.log(stdout);
						});
					}
				});
			});
		}
	}

}
Main.init();
