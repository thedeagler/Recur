module.exports = {
  devtool: 'eval',
  entry: ['./app/components'],
  output: {
    filename: './app/bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
}
