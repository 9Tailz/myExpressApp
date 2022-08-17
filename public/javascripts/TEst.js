var dataToSend;
const Python = spawn('python3', ['Main_.py']);

Python.stdout.on('data', function (data) {
  console.log('Send Data to Python Script');
  dataToSend = data.toString();

  python.on('close', (code) => {
    console.log('Child Process Closed with ${code}');
    res.send(dataToSend)
  })
})