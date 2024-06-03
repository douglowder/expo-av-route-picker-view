import {
  ExpoAvRoutePickerView,
  ExpoAvRoutePickerViewProps,
} from '@douglowder/expo-av-route-picker-view';
import { Platform, View } from 'react-native';

export default function RoutePicker(props: ExpoAvRoutePickerViewProps) {
  return Platform.OS === 'ios' ? (
    <ExpoAvRoutePickerView {...props} />
  ) : (
    <View {...props} />
  );
}
