module.exports = {
  // dist対象ディレクトリからの相対パス
  distDir: '../../dist',

  webpack: config => {
    const preference = config;

    const loaders = [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        use: ['eslint-loader', 'stylelint-custom-processor-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              fallback: 'file-loader',
              quality: 80
            }
          }
        ]
      }
    ];

    preference.module.rules.push(...loaders);

    return preference;
  }
};
