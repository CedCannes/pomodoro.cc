var HtmlWebpackPlugin = require('html-webpack-plugin');
var StringReplacePlugin = require("string-replace-webpack-plugin");

module.exports = function(production){
  var segment_write_key = production ? 'DI4YQLtpCkiyMnlITlg8o3pO6UDrnmbx' : 'u8FtwJOHxRRYAfIhZOv78SGzcQta1Yty'
  return {
    loaders: [
    // image loader - https://www.npmjs.com/package/image-webpack-loader
    {
      test: /\.(jpe?g|png|gif|svg|ico)$/i,
      loaders: [
      'file?name=[name].[ext]',
      'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
      ]
    },
    {
      test: /\.(mp3|ogg)$/i,
      loaders: [
        'file?name=[name].[ext]&context=./src',
      ]
    },
    // javascript/jsx loader - https://www.npmjs.com/package/babel-loader
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: [ 'babel-loader' ],
    },
    // styles
    {
      test: /\.(styl|css)$/,
      loader: "style!css!autoprefixer-loader?browsers=last 2 version!stylus-loader",
    },
    ],
    // https://www.npmjs.com/package/html-webpack-plugin - generate our html file from a template - makes it easier to include custom stuff
    indexPagePlugin: new HtmlWebpackPlugin({
                            inject: true,
                            segment_write_key: segment_write_key,
                            development: !production,
                            title: 'Pomodoro.cc - Time tracking with the Pomodoro technique',
                            filename: 'index.html',
                            template: './src/index_template.html'
                          })
  }
}
