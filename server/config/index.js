const db = require('./setupDatabase.js')
const api = require('./api/index.js')(db)
var bodyParser = require('body-parser')

module.exports = function(app) {
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
    
    app.use(api)
}