const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const glob = require("glob");

// データをまとめて読み込む
const { metaData, navData, topicData, tableData, cardData } = require("./src/data/data.js");

// EJS ファイルを動的に取得
const ejsFiles = glob.sync(path.resolve(__dirname, "src/views/pages/**/*.ejs"));

// ページ設定
const pages = [
  { name: "index", title: "index" },
  { name: "message", title: "message" },
  { name: "company", title: "company" },
];

module.exports = {
  entry: "./src/js/index.js",
  devtool: "source-map",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // 出力先をクリーンアップ
  },
  devServer: {
    static: path.resolve(__dirname, "dist"), // サーバーのルートディレクトリ
    compress: true, // gzip圧縮を有効化
    port: 3000, // ローカルサーバーのポートを指定
    open: true, // ブラウザを自動で開く
    hot: true, // ホットリロードを有効化
    watchFiles: ["src/**/*"], // 監視対象のファイル
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: "html-loader",
            options: { 
              minimize: false,
              sources: false,
              esModule: false
            },
          },
          {
            loader: "template-ejs-loader",
            options: {
              root: path.resolve(__dirname, "src/views"),
              data: { metaData, navData, topicData, cardData, tableData },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/style.[contenthash].css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/img", to: "img" },
        { from: "src/favicon.ico", to: "favicon.ico" },
      ],
    }),
    ...pages.map((page) => new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `src/views/pages/${page.name}.ejs`),
      filename: `${page.name}.html`,
      minify: false,
      cache: false,
      inject: true,
      templateParameters: {
        pageMeta: metaData[page.title] || metaData.default,
        navData,
        topicData,
        tableData,
        cardData,
        metaData,
      },
    })),
    
  ],
};
