const isProd = (process.env.NODE_ENV || 'production') === 'production';

module.exports = {
  assetPrefix: isProd ? '/study-shaders' : '',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl)$/,
      use: [options.defaultLoaders.babel, { loader: 'raw-loader' }],
      exclude: /node_modules/,
    });
    return config;
  },
};
