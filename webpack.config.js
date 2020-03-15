const path = require('path');

module.exports = env => {
  console.log(env);
  return {
    entry: './client/index.js',
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'bundle.js'
    },
    mode: env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
          ]
        }
      ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'client'),
      publicPath: '/build/',
      historyApiFallback: true,
      proxy: {
        '/': 'http://localhost:3000'
      }
    }
  };
};
