const express = require('express')
const app = express()
const spawn = require("child_process").spawn;
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

app.post('/getAnswer', function (req, res) {
  //const pythonProcess = spawn('python',["./script.py",req.query.question,req.body.text]);
  //pythonProcess.stdout.on('data', (data) => {
    res.send(req.body.text)
//});
  
})
 
app.listen(3000,()=>{
  console.log('server started on port 3000')
})