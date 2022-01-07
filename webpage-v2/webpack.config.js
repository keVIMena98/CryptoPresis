const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".json"],
        fallback: { 
            "os": require.resolve('os-browserify/browser'),
            "http": require.resolve('stream-http'),
            "https": require.resolve('https-browserify'),
            "stream": require.resolve('stream-browserify'),
            "crypto": require.resolve('crypto-browserify')
        }
    }, 
    plugins: [
        new NodePolyfillPlugin()
    ]
}