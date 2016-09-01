const externals = require('webpack-node-externals')

module.exports = {
  entry: './app.js',
  output: {
    path: './build',
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  externals: [externals()],
  target: 'node',
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(json)$/,
        loader: 'json'
      }
    ]
  }
}
