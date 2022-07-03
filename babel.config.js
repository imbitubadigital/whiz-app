module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [

      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@src': './src',
            '@assets': './src/assets',
            '@components': './src/components',
            '@configs': './src/configs',
            '@contexts': './src/contexts',
            '@global': './src/global',
            '@modules': './src/modules',
            '@helpers': './src/helpers',
            '@hooks': './src/hooks',
            '@screens': './src/screens',
            '@routes': './src/routes',
            '@services': './src/services',
            '@styles': './src/styles',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};

