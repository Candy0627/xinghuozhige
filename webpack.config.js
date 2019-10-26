const path = require('path');
const glob = require('glob');
// 使用插件之前需要先加载对应的plugin
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackconfig = {
    mode: 'development',
    entry: {
        "index": path.resolve(__dirname, "src/js/index/index.js"),
        "list": path.resolve(__dirname, "src/js/list/list.js"),
    },
    output: {
        path: path.resolve(__dirname + '/dist'),
        filename: 'js/[name].js' // 输出多个结果，文件名带hash值
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.css$/, // 匹配css文件模块
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(png|gif|jpg|svg)$/, // 匹配图片文件
                use: [{
                    loader: 'url-loader',
                    options: {
                        useRelativePath: false,
                        outputPath: 'images/',
                        name: '[name].[ext]',
                        limit: 10240
                        // 会输出类似下面这样的结果
                        // path/to/file.png?e43b20c069c4a01867c31e98cbce33c9
                    }
                }]
            },
            {
                test: /\.(eot|ttf|woff|woff2|mp4)$/,
                // loader: 'url-loader?name=images/[name].[ext]',
                loader: 'url-loader',
                options: {
                    limit: 10,
                    name: 'video/[name].[ext]'
                }
            },
            {
                test: /\.(mp3)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    name: 'audios/[name].[ext]',
                    limit: 10
                }
            },
            // {
            //     test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         name: 'video/[name].[ext]'
            //     }
            // },
            {
                test: /\.(html)$/, // 用来匹配html文件模块(html需要通过插件引入？)，可以将html标签中引入的图片资源进行打包
                use: [{
                    loader: 'html-loader',
                    options: {
                        publicPath: "./",
                        attrs: ['img:src'] // <tag>为引入图片的标签名，<attribute>为引入图片的属性名
                    }
                }]
            },
            {
                test: require.resolve('jquery'),
                use: [{
                        loader: 'expose-loader',
                        options: '$'
                    },
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }
                ]
            }
        ]
    },
    plugins: [
        // 每次构建完成后先清理一遍dist目录
        new CleanWebpackPlugin(),
        // 生成html文件到输入目录
        new HtmlWebpackPlugin({
            // 可以以src目录下的html源文件为模板
            template: path.join(__dirname, '/src/templates/index.html'),
            // 在目标目录下生成目标文件
            filename: path.join(__dirname, '/dist/index.html'),
            chunks: ["index"] // 这个参数配合entry可以将打包的模块以<script></script>的形式加载到html文件中
        }),
        new HtmlWebpackPlugin({
            // 可以以src目录下的html源文件为模板
            template: path.join(__dirname, '/src/templates/list.html'),
            // 在目标目录下生成目标文件
            filename: path.join(__dirname, '/dist/list.html'),
            chunks: ["list"] // 这个参数配合entry可以将打包的模块以<script></script>的形式加载到html文件中
        }),
        // 该插件可以将源目录中的文件直接复制到目标目录中
        new CopyWebpackPlugin([{
            from: './src/*.css', // 选择源目录下的所有css文件
            flatten: true // 选择拷贝文件还是包括文件夹，默认是false
        }]),
        //该插件可以把css代码打包到单独的css文件
        new MiniCssExtractPlugin({
            filename: "css/[name].css" //可以设置存放路径
        })
    ],
    devServer: {
        contentBase: '/dist', // 服务的内容目录
        port: 8088, // 搭建在本地的服务的端口号
        compress: true, // 服务开启gzip压缩
        open: true, // 自动打开本地浏览器
        overlay: true,
    }
}

module.exports = webpackconfig