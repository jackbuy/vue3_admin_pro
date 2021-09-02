var path = require('path')

var SRC_PATH = path.join(__dirname, '../../../../', 'src')

console.log(path.join(__dirname, '..', 'async-frontend'))

module.exports = {
    configureWebpack: {
        resolve: {
            modules: [SRC_PATH, 'node_modules'],
            alias: {
                // '@': path.resolve(SRC_PATH),
                // '~': path.join(__dirname, '..', 'async'),
                // '~a': path.join(__dirname, '..', 'async-frontend')
            },
            extensions: ['.scss', '.css', '.js', '.jsx', '.vue', '.json']
        }
    }
}
