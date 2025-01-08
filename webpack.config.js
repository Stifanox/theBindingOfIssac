const path = require('path');
module.exports = {
    entry: {
        script: './entries/main.ts',
        editor: './entries/editor.ts',
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
        alias:{
            '@img': path.resolve(__dirname, 'Img'),
            '@assets': path.resolve(__dirname, 'assets'),
        },
        extensions: ['.tsx', '.ts', '.js']
    },
    watch: true
}