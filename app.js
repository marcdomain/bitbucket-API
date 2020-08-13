const express = require('express')
const bodyParser = require('body-parser')
const getAllProjectsInWorkspace = require('./controllers')

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/:workspace', getAllProjectsInWorkspace)


const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`App is running on port ${port}`));