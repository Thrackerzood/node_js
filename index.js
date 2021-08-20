const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000





app.listen(PORT, (err) => {
    console.log('server work')
})

// all city task - 1
app.use('/api/allCity', require('./components/citySearch'))
// /allCountry/city task - 2, 3 , 4 , 5 , 6 , 7
app.use('/api/allCountry', require('./components/countrySearch'))
