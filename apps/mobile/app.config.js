export default {
  expo: {
    name: 'commerce',
    slug: 'commerce',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#FFFFFF'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    plugins: ['expo-community-flipper'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.prisma.commerce'
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF'
      },
      package: 'com.prisma.commerce'
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      ...process.env
    }
  }
}
