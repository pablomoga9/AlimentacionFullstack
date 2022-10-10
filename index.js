const express = require('express');
const path = require('path');
const morgan = require('morgan');//Es necesario??
const cors = require('cors');//Es necesario??
const app = express();


//Router
const router = require('./routes/routes');

//Rutas
app.use('/', router);

//Read body request
app.use(cors());//Es necesario??
app.use(express.json())// Para habilitar recepción de datos JSON en una request //Es necesario??
app.use(express.urlencoded({ extended: true }));//Es necesario??
const loggerFormat = ':method :url :status :response-time ms - :res[content-length]'
app.use(morgan(loggerFormat, {//Es necesario??
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: process.stderr
}));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);