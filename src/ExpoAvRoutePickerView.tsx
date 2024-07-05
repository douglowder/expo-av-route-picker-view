import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoAvRoutePickerViewProps } from './ExpoAvRoutePickerView.types';
import { Platform, View } from 'react-native';

let NativeView: React.ComponentType<ExpoAvRoutePickerViewProps>;
if (Platform.OS === 'ios') {
  NativeView = requireNativeViewManager('ExpoAvRoutePickerView');
} else {
  NativeView = View;
}

export default function ExpoAvRoutePickerView(
  props: ExpoAvRoutePickerViewProps,
) {
  return (
    <View {...props}>
      <NativeView {...props} />
    </View>
  );
}
