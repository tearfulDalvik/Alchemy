const path = require('path');

module.exports = {
  entry: './js/index.umd.js',
  mode: 'development',
  output: {
    filename: 'alchemy.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'AlchemyUI',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  devtool: "#source-map"
}