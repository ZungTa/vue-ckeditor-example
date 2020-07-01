const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CKEditorWebpackPlugin = require('@ckeditor/ckeditor5-dev-webpack-plugin');
const path = require('path');

const config = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {}
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /.s[a|c]ss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            // {
            //     test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
            //     use: ["raw-loader"],
            // },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                // exclude: [
                //     /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
                //     /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css/,
                // ],
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },

        ]
    },
    // resolve: {
    //     alias: {
    //         "vue$": "vue/dist/vue.esm.js"
    //     },
    //     extensions: ['*', '.js', '.vue', '.json']
    // },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    devtool: 'eval',
    devServer: {
        hot: true,
        publicPath: '/',
        contentBase: path.join(__dirname, 'dist')

    }
}

module.exports = config;