module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@elements": "./src/elements",
            "@svgs": "./src/svgs",
            "@nav": "./src/nav",
            "@assets": "./src/assets",
            "@actions": "./src/actions",
            "@api": ".src/api",
            "@config": "./src/config",
            "@navigation": "./src/navigation",
            "@reducers": "./src/reducers",
            "@sagas/*": "./src/sagas",
            "@store/*": "./src/store",
            "@fonts": "./src/fonts",
            "@hooks": "./src/hooks",
          },
        },
      ],
      ["react-native-reanimated/plugin"],
    ],
  };
};
