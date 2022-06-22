const express = require('express');
const app = express();

app.use('/public', express.static('public'))

//rota do arquivo html princiapal
app.get('/',(req, res) => {
    res.sendFile(__dirname + "/index.html")
})

//porta do servidor local
const port = 5080
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})