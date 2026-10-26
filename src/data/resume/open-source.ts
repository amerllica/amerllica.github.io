import type { Package, PullRequest } from './types';

export const packages: Package[] = [
  {
    name: 'rn-vlc-plyr',
    url: 'https://www.npmjs.com/package/rn-vlc-plyr',
    description: 'VLC video and audio player for React Native, built with Nitro Modules (Kotlin, Swift, C++). Plays MKV, HEVC, AV1, HLS and RTSP with subtitles and background audio.',
    tags: ['React Native', 'Nitro Modules', 'Kotlin', 'Swift'],
  },
  {
    name: 'react-native-tinode',
    url: 'https://www.npmjs.com/package/react-native-tinode',
    description: 'React and React Native hooks for Tinode chat on iOS, Android and web, with offline cache.',
    tags: ['React Native', 'TypeScript', 'Chat'],
  },
  {
    name: 'expo-google-tag-manager',
    url: 'https://www.npmjs.com/package/expo-google-tag-manager',
    description: 'Expo config plugin for Google Tag Manager (Firebase) on iOS and Android.',
    tags: ['Expo', 'Config Plugin', 'Analytics'],
  },
  {
    name: 'react-native-google-tag-manager',
    url: 'https://www.npmjs.com/package/react-native-google-tag-manager',
    description: 'Google Tag Manager bridge for bare React Native apps. 11 stars, 7 forks.',
    tags: ['React Native', 'Objective-C'],
  },
  {
    name: 'react-native-config-fixed-android',
    url: 'https://www.npmjs.com/package/react-native-config-fixed-android',
    description: 'react-native-config with the Android New Architecture fix that was later merged upstream.',
    tags: ['React Native', 'Android'],
  },
];

export const pullRequests: PullRequest[] = [
  {
    repo: 'react/react-native',
    title: 'Fix iOS TextInput onContentSizeChange not firing on text change',
    url: 'https://github.com/react/react-native/pull/59447',
    year: 2026,
    status: 'open',
  },
  {
    repo: 'tinode/tinode-js',
    title: 'React Native support: app-provided storage and network status',
    url: 'https://github.com/tinode/tinode-js/pull/103',
    year: 2026,
    status: 'merged',
  },
  {
    repo: 'hyodotdev/openiap',
    title: 'Explain Expo Go instead of a Nitro runtime error',
    url: 'https://github.com/hyodotdev/openiap/pull/561',
    year: 2026,
    status: 'merged',
  },
  {
    repo: 'react-native-config/react-native-config',
    title: 'Fix Android on the New Architecture (0.73) with a working example',
    url: 'https://github.com/react-native-config/react-native-config/pull/811',
    year: 2024,
    status: 'merged',
  },
  {
    repo: 'TanStack/query',
    title: 'Guide for React Native createAsyncStoragePersister',
    url: 'https://github.com/TanStack/query/pull/4064',
    year: 2022,
    status: 'merged',
  },
  {
    repo: 'terser/html-minifier-terser',
    title: 'Update clean-css version',
    url: 'https://github.com/terser/html-minifier-terser/pull/65',
    year: 2021,
    status: 'merged',
  },
  {
    repo: 'DefinitelyTyped/DefinitelyTyped',
    title: 'Add swapLeftAndRightInRTL type to React Native I18nManager',
    url: 'https://github.com/DefinitelyTyped/DefinitelyTyped/pull/48885',
    year: 2020,
    status: 'merged',
  },
  {
    repo: 'BIVROST/360WebPlayer',
    title: 'Fix the HLS playing bug',
    url: 'https://github.com/BIVROST/360WebPlayer/pull/5',
    year: 2020,
    status: 'merged',
  },
];
