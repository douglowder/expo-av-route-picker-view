import ExpoModulesCore

public class ExpoAvRoutePickerViewModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoAvRoutePickerView")

    // Enables the module to be used as a native view. Definition components that are accepted as part of the
    // view definition: Prop, Events.
    View(ExpoAvRoutePickerView.self) {
      Prop("tintColor") { (view: ExpoAvRoutePickerView, tintColor: UIColor?) in
        if tintColor != nil && view.avRoutePickerView.tintColor != tintColor {
          view.avRoutePickerView.tintColor = tintColor
        }
      }
      Prop("activeTintColor") { (view: ExpoAvRoutePickerView, activeTintColor: UIColor?) in
        if activeTintColor != nil && view.avRoutePickerView.activeTintColor != activeTintColor {
          view.avRoutePickerView.activeTintColor = activeTintColor
        }
      }
      Prop("prioritizesVideoDevices") { (view:ExpoAvRoutePickerView, prioritizesVideoDevices: Bool?) in
        if (prioritizesVideoDevices != nil && view.avRoutePickerView.prioritizesVideoDevices != prioritizesVideoDevices) {
          view.avRoutePickerView.prioritizesVideoDevices = prioritizesVideoDevices ?? false
        }
      }
    }
  }
}
