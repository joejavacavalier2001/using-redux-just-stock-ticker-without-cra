const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

var config = { 
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
        {
        test: /\.(png|jpe?g|svg|gif|ico)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            encoding: true
          }
        }
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
	  options: {
                presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      },
	/*{
	    test: /\.(png|svg|jpg|gif|ico)$/,
	    use: ['file-loader?name=[name].[ext]']
	}*/
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html'//,
      //favicon: './favicon.ico'
    }),
    new webpack.ProvidePlugin({process: 'process/browser.js'})
    /*new webpack.ProvidePlugin({
          process: 'process/browser' 
    })*/
  ],
  devServer: {
    //compress: true,
    //inline: true,
    server: {
	    type: 'https',
	    options: {
	      key: "/<private_dir>/rktlebnhwebworks_net.key",
	      ca: "/<private_dir>/rktlebnhwebworks.net.ca-bundle", 
	      cert: "/<private_dir>/rktlebnhwebworks.net.crt"
	    }
    },
    allowedHosts: [
        '.rktlebnhwebworks.net'
    ],
    headers: { 
      'Cache-Control': 'max-age=0',
      'Access-Control-Allow-Origin': '*'
    }	    
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development'){
    console.log("development mode\n"); 
    config.devtool = "eval-source-map";
  }else{
    // config.devtool = 'source-map';
  }

  return config;
};
