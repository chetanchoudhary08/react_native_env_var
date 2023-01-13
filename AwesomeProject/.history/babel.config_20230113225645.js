// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };
// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
//     plugins: ['module:react-native-dotenv'],
//   };
// };

module.exports = {
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
