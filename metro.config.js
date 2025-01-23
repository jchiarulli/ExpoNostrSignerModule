// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Replace with the path to your local react native library, e.g., NostrSignerModule
// const packagePath = "/path/to/react/library/";

config.resolver.nodeModulesPaths = [
  packagePath,
  ...config.resolver.nodeModulesPaths,
];

config.watchFolders = [packagePath, ...config.watchFolders];

module.exports = config;
