module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        "alias": {
          "@assets": "./assets",
          "@components": "./components",
          "@config": "./config",
          "@constants": "./constants",
          "@hooks": "./hooks",
          "@interfaces": "./interfaces",
          "@navigation": "./navigation",
          "@redux": "./redux",
          "@screens": "./screens",
          "@slices": "./redux/slices",
          "@actions": "./redux/actions",
          "@reducers": "./redux/reducers",
          "@thunks": "./redux/thunks",
          "@util": "./util",
          "@contexts": "./contexts",
          "@models": "./models",
          "@services": "./services"
        }
      }],
     ['react-native-reanimated/plugin'],
    ]
  };
};
