const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src'),
            styles: path.resolve(__dirname, '../src/styles'),
            '~': path.resolve(__dirname, '../src/assets')
        },
        extensions: ['.ts', '.tsx', '.scss']
    }
}