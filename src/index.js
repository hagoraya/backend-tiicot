const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

//express app
const app = express();

var PORT = process.env.PORT || 5000;

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined'))


//database
var database = [];

//sample data 
const student1 = {
    firstname: "harry",
    lastname: "singh"
}

const student2 = {
    firstname: "mike",
    lastname: "tyson"
}
const student3 = {
    firstname: "harry",
    lastname: "potter"
}
const student4 = {
    firstname: "lebron",
    lastname: "james"
}

//add sample data to database
database.push(student1, student2, student3, student4);

console.log(database)

//api
app.get('/', (req, res) => {
    try {
        res.status(200).send(database)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})





app.listen(PORT, () => {
    console.log("listening on port " + PORT)
})