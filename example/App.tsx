import { StyleSheet, Text, View } from 'react-native';

import * as ExpoAvRoutePickerView from 'expo-av-route-picker-view';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoAvRoutePickerView.hello()}</Text>
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
});
