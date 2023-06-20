import { InAppBrowser } from 'react-native-inappbrowser-reborn';
import { Linking } from 'react-native';
import MetricsService, { EMBEDDED_BROWSER_ERROR_EVENT_ID } from '../../../../../p1p3-mobile/src/services/MetricsService/MetricsService';

export const OpenURL = async (URL: string) => {
  try {
    if (await InAppBrowser.isAvailable()) {
      return await InAppBrowser.open(URL, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#367C2B',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: '#367C2B',
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
      });
    } else {
      await Linking.openURL(URL);
    }
  } catch (error) {
    MetricsService.logCustomEvent({ eventId: EMBEDDED_BROWSER_ERROR_EVENT_ID, attributes: { error: error } });
  }
};

export const CloseBrowser = async () => {
  InAppBrowser.close();
};
