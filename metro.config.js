const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");
const { sep } = require("node:path");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
const nativewindConfig = withNativewind(config);
const resolveWithNativewind = nativewindConfig.resolver.resolveRequest;

nativewindConfig.resolver.resolveRequest = (context, moduleName, platform) => {
  // expo-asset needs AssetRegistry, which the NativeWind component wrapper does not export.
  if (
    moduleName === "react-native" &&
    context.originModulePath.includes(`${sep}node_modules${sep}expo-asset${sep}`)
  ) {
    return context.resolveRequest(context, moduleName, platform);
  }

  return resolveWithNativewind(context, moduleName, platform);
};

module.exports = nativewindConfig;
