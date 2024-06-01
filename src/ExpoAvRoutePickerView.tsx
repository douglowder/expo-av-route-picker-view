import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoAvRoutePickerViewProps } from './ExpoAvRoutePickerView.types';

const NativeView: React.ComponentType<ExpoAvRoutePickerViewProps> =
  requireNativeViewManager('ExpoAvRoutePickerView');

export default function ExpoAvRoutePickerView(props: ExpoAvRoutePickerViewProps) {
  return <NativeView {...props} />;
}
