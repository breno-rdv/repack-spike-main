import {AppRegistry, Platform} from 'react-native';
import {ScriptManager, Script, Federated} from '@callstack/repack/client';
import App from './../App';
import {name as appName, localChunks} from '../app.json';

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  const containersResponse = await fetch(
    'http://localhost:9000/repackminiapp?platform=android&appVersion=0.0.1',
  );

  const containers = await containersResponse.json();

  const resolveURL = Federated.createURLResolver({
    containers,
  });

  if (scriptId === 'rePackMiniApp') {
    const url = resolveURL(scriptId, caller);
    if (url) {
      return {
        url,
        query: {
          platform: Platform.OS,
        },
      };
    }
  }

  if (__DEV__) {
    return {
      url: Script.getDevServerURL(scriptId),
      cache: false,
    };
  }

  if (localChunks.includes(scriptId)) {
    return {
      url: Script.getFileSystemURL(scriptId),
    };
  }
});

AppRegistry.registerComponent(appName, () => App);
