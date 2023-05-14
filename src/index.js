const express = require("express")
// const React = require("react");
// const renderToString = require('react-dom/server').renderToString;
// const Home = require("./client/components/Home").default
const renderer = require("./helpers/renderer").default
const app = express();

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.send(renderer(req))
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})