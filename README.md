# expo-av-route-picker-view

iOS/tvOS only React Native wrapper for the AVRoutePickerView (selector for AirPlay devices)

# Example

(See also the [working example](./example/) in this repo.


```tsx
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ExpoAvRoutePickerView } from 'expo-av-route-picker-view';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {}}>
        {({ pressed, focused }) => {
          return (
            <View style={{ opacity: focused || pressed ? 0.6 : 1.0 }}>
              <Text>Here is the route picker!</Text>
            </View>
          );
        }}
      </Pressable>
      <ExpoAvRoutePickerView
        style={styles.picker}
        tintColor="#000000"
        activeTintColor="#0000FF"
        prioritizesVideoDevices
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    width: 100,
    height: 100,
  },
});
```

# Installation in managed Expo projects

For [managed](https://docs.expo.dev/archive/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](#api-documentation). If you follow the link and there is no documentation available then this library is not yet usable within managed projects &mdash; it is likely to be included in an upcoming Expo SDK release.

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

### Add the package to your npm dependencies

```
npm install expo-av-route-picker-view
```

### Configure for iOS

Run `npx pod-install` after installing the npm package.

# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide](https://github.com/expo/expo#contributing).
