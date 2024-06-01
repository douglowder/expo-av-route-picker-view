import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoAvRoutePickerViewProps } from './ExpoAvRoutePickerView.types';
import { View } from 'react-native';

const NativeView: React.ComponentType<ExpoAvRoutePickerViewProps> =
  requireNativeViewManager('ExpoAvRoutePickerView');

export default function ExpoAvRoutePickerView(
  props: ExpoAvRoutePickerViewProps,
) {
  return (
    <View
      {...props}
      style={[
        props.style,
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      ]}
    >
      <NativeView {...props} />
    </View>
  );
}
