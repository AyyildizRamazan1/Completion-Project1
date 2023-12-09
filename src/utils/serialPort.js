const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const app = express();
app.use(cors());

app.use(bodyParser.json());

let port = new SerialPort({path:"COM3",baudRate: 9600});
function restartPort(path, baudRate) {
    if (port.isOpen) {
        port.close(() => {
            port = new SerialPort({ path, baudRate });
            port.pipe(parser);
        });
    } else {
        port = new SerialPort({ path, baudRate });
        port.pipe(parser);
    }
}

const parser = new ReadlineParser();
port.pipe(parser);

class Msg {
    constructor(voltage, batary, capacity, akim){
        this.voltage = voltage
        this.batary = batary
        this.capacity = capacity
        this.akim = akim
    }
}

setInterval(() => {
    let NwMsg = new Msg(Math.random(0,100) * 10, Math.random(0,100) * 10, Math.random(0,100) * 10, Math.random(0,100) * 10)
    console.log(NwMsg)
    port.write(JSON.stringify(NwMsg));
},3000)

let LastData
parser.on("data", (line) => {
    console.log(line)
    LastData = JSON.parse(line)    
});
app.get('/greeting', (req, res) => {
    res.json(LastData);
});

app.post('/configureSerialPort', (req, res) => {
    const { path, baudRate } = req.body;
    restartPort(path, parseInt(baudRate, 10)); 
    res.send({ message: "SerialPort configured successfully!" });
});

const PORT = 4575;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});