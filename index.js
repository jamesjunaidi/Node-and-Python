const express = require('express')
const {spawn} = require('child_process');
const app = express()
const port = 3000

app.get('/', (req, res) => {
	var dataToSend;
	var largeDataSet = [];
	// spawn new child process to call the python script

	// const python = spawn('python', ['script1.py']);
	// const python = spawn('python', ['script2.py', 'node.js', 'python'])
	const python = spawn('python', ['script4.py']);

	// collect data from script
	python.stdout.on('data', function (data) {
		console.log('Pipe data from python script ... ');
		// dataToSend = data.toString();
		largeDataSet.push(data);
	});

	// in close event we are sure that stream from child process is closed
	python.on('close', (code) => {
		console.log(`child process close all stdio with code ${code}`);
		// send data to browser
		// res.send(dataToSend)
		res.send(largeDataSet.join(""));
	});

})

app.listen(port, () => console.log(`Example app listening on port ${port}`))