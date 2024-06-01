import { ColorValue, ViewProps } from 'react-native';

export type ExpoAvRoutePickerViewProps = ViewProps & {
  tintColor?: ColorValue;
  activeTintColor?: ColorValue;
  prioritizesVideoDevices?: boolean;
};
