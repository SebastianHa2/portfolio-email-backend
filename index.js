const express = require('express')
const cors = require('cors')

const emailRoute = require('./app/routes/email.route')

const app = express()

app.use(express.json())

const corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(emailRoute)



const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

