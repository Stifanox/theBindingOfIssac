const path = require('path');
module.exports = {
    entry: {
        script: './main.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|mp3|wav)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ]
            },
            { test: /\.json$/, loader: 'json' },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    watch: true
}