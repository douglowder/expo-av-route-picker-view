import { Pressable, StyleSheet, Text, View } from 'react-native';

import RoutePicker from './RoutePicker';

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
      <RoutePicker
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
