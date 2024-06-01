import ExpoModulesCore
import AVKit

class ExpoAvRoutePickerView: ExpoView {
  public let avRoutePickerView = AVRoutePickerView()

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    clipsToBounds = true
    avRoutePickerView.tintColor = UIColor.white
    avRoutePickerView.activeTintColor = UIColor.cyan
    avRoutePickerView.backgroundColor = UIColor.clear
    avRoutePickerView.routePickerButtonStyle = .plain
    #if os(iOS)
    avRoutePickerView.isRoutePickerButtonBordered = false
    avRoutePickerView.showsLargeContentViewer = true
    #endif
    addSubview(avRoutePickerView)
    avRoutePickerView.autoresizingMask = [
      .flexibleWidth,
      .flexibleHeight,
      .flexibleBottomMargin,
      .flexibleTopMargin,
      .flexibleLeftMargin,
      .flexibleRightMargin
    ]
  }
}
