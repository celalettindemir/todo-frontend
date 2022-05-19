process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
    devServer: {
        port: 8081,
        proxy: {
            "/api": {
                target: process.env.VUE_APP_BASE_API_URL,
                changeOrigin: true,
            },
        },
    },
}