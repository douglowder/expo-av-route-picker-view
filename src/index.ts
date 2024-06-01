import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoAvRoutePickerView.web.ts
// and on native platforms to ExpoAvRoutePickerView.ts
import ExpoAvRoutePickerViewModule from './ExpoAvRoutePickerViewModule';
import ExpoAvRoutePickerView from './ExpoAvRoutePickerView';
import { ChangeEventPayload, ExpoAvRoutePickerViewProps } from './ExpoAvRoutePickerView.types';

// Get the native constant value.
export const PI = ExpoAvRoutePickerViewModule.PI;

export function hello(): string {
  return ExpoAvRoutePickerViewModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoAvRoutePickerViewModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoAvRoutePickerViewModule ?? NativeModulesProxy.ExpoAvRoutePickerView);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoAvRoutePickerView, ExpoAvRoutePickerViewProps, ChangeEventPayload };
