const path = require("path")
const webpackNodeExternals = require("webpack-node-externals")

module.exports = {
    // Inform wepack that we're building a bundle  for nodeJs,rather than for the browser
    target: 'node',

    // Tell webpack the root file of our server application
    entry: "./src/index.js",

    // tell webpack where to put the output file that is generated
    output: {
        filename: "serverBundle.js",
        path: path.resolve(__dirname, 'build')

    },

    // Tell webpack to run babel on every file it runs through
    module: {
        rules: [{
            test: /\.js?$/,
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
    },
    externals: [webpackNodeExternals()]
}