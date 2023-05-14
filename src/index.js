const express = require("express")
const renderer = require("./helpers/renderer").default
const createStore = require("./helpers/createStore").default
const app = express();

app.use(express.static('public'))

app.get('*', (req, res) => {
    const store = createStore();

    // logic to initialize and load data into the store 

    res.send(renderer(req, store))
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})