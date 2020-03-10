const {Client} = require('pg')
const client = new Client({
    user: 'productivity',
    host: 'localhost',
    database: 'productivity',
    password: 'catkin',
    port: 5432
})
client.connect()

console.log("Connected to database successfully")

module.exports = {
    addToDatabase(hostname, time, date, error_flag, package_count, cb) {
        const query = {
            text: 'INSERT INTO user_data (hostname, time, date, error_flag, package_count) VALUES ($1, $2, $3, $4, $5);',
            values: [hostname, time, date, error_flag, package_count]
        }
        client.query(query, (err, res) => {
            if(err)
                cb(err, null)
            else                
                cb(null, res.rows)
        })
    },

    getAllData(cb) {
        client.query('SELECT * from user_data;', (err, res) => {
            if(err)
                cb(err, null)
            else
                cb(null, res.rows)
        })
    }
}