import { StyleSheet, Text, View } from 'react-native';

import { ExpoAvRoutePickerView } from 'expo-av-route-picker-view';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Here is the route picker!</Text>
      <ExpoAvRoutePickerView
        style={styles.picker}
        tintColor="#000000"
        activeTintColor="#0000FF"
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
