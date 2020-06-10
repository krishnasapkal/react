const express = require('express')
const app = express()
const spawn = require("child_process").spawn;
 
app.use(express.static('public'))

app.post('/getAnswer', function (req, res) {
  const pythonProcess = spawn('python',["./script.py",req.query.question,req.body.text]);
  pythonProcess.stdout.on('data', (data) => {
    res.send(data)
});
  
})
 
app.listen(3000,()=>{
  console.log('server started on port 3000')
})