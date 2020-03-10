const express = require('express')

const app = express()
const port = 3000

require('./config/index.js')(app)

app.get('/', (req, res) => res.send("Productivity Tracker v1.0.0"))

app.listen(port, () => console.log("Listening on " + port))