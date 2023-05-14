const path = require("path")

module.exports = {
    // Tell webpack the root file of our server application
    entry: "./src/client/client.js",

    // tell webpack where to put the output file that is generated
    output: {
        filename: "clientBundle.js",
        path: path.resolve(__dirname, 'public')

    },

    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [{
            test: /\.js$/,
            // test: /\.js?$/,
            // test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            options: {
                presets: [
                    // react preset-- takes all the jsx and convert it into normal function calls
                    // stage-0 --> handling async code
                    'react', "stage-0", ['env', {
                        targets: { browsers: "last 2 versions" }
                    }]
                ]
            }
        }]
    }
}