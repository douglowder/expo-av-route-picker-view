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
    #if os(tvOS)
    avRoutePickerView.routePickerButtonStyle = .plain
    #endif
    #if os(iOS)
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
