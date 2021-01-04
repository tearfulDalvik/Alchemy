const path = require('path');

module.exports = {
  entry: {
    controls: './js/index.umd.ts',
    react: './js/index.react.ts'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'alchemy.[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'AlchemyUI',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devtool: "#source-map"
}