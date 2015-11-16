var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(production){
  var base = production ? '/beta/' : '/'
  return {
    loaders: [
    // image loader - https://www.npmjs.com/package/image-webpack-loader
    {
      test: /\.(jpe?g|png|gif|svg|ico)$/i,
      loaders: [
      'file?hash=sha512&digest=hex&name=[hash].[ext]',
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
      test: /\.styl$/,
      loader: "style!css!autoprefixer-loader?browsers=last 2 version!stylus-loader",
    },
    // and font files - embed them if possible
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/font-woff2"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"
    }
    ],
    // https://www.npmjs.com/package/html-webpack-plugin - generate our html file from a template - makes it easier to include custom stuff
    indexPagePlugin: new HtmlWebpackPlugin({
                            inject: true,
                            base: base,
                            title: 'Pomodoro.cc - Time tracking with the Pomodoro technique',
                            filename: 'index.html',
                            template: './src/index_template.html'
                          })
  }
}