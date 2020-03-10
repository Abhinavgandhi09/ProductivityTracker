var router = require('express').Router()

module.exports = function(db) {
    router.post('/api/user_data', function(req, res, next) {
        console.log("Received POST request")

        db.addToDatabase(req.body.host, req.body.time, req.body.date, req.body.error_flag, req.body.package_count, (error, result) => {
            if(error)
                return res.status(500).json({e: error})
            return res.status(200).json({})
        })
    })

    router.get('/api/user_data', function(req, res, next) {
        console.log("Received GET request")
        db.getAllData((err, result) => {
            if(err)
                return res.status(500).json({error: err})
            return res.json(result)
        })
    })

    return router
}