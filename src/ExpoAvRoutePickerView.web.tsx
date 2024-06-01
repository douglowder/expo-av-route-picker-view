import * as React from 'react';

import { ExpoAvRoutePickerViewProps } from './ExpoAvRoutePickerView.types';

export default function ExpoAvRoutePickerView(props: ExpoAvRoutePickerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
