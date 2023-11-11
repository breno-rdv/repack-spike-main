# re.pack_spike
Spike for modular mobile app using Re.Pack

## Motivation
Proof of concept for the creation of a modular app, maintaining different apps/repos for different customer profiles can be very hard and time consuming, many features to be implemented and integrated as well.

So, creating a modular app becomes handy, as there is only one code base and it is bundled according to each scenario.

## Re.pack features
It is a toolkit for React Native, a set of APIs exposing Webpack features, such as:
- Code splitting;
- Module Federation;
- Plugins;
- Loaders;

And supports by default Hermes, Flipper, RN Refresh, etc.

## Implementation guide for this project

The implementation will follow the approach of creating a SuperApp/MiniApp, in which there will be two modules, `seller-boundary` and `buyer-boundary` and the app will be bundled based on profile, passing a flag when the application be build.

Also, there will be an `Registration App` project that will be loaded into the SuperApp as being an external module, the `rePackMiniApp aka Registration App`.

### Running the applications
As aforementioned, there are two applications to be built, and the SuperApp relies on the bundle from the `Registration App`
to be built correctly.

** Assuming everything is set up for Android/IOS environment. **

The `Registration App` can be built as a standalone project, for doing so, navigate to its root folder, and:

- First, install the dependencies, typing `npm install`;

- Then, start the repack server, typing `npm run android:standalone`;

- And finally, on a new terminal, run the application for the desired SO, e.g. `npm run android:local`;

>> For running `Super App`, it is necessary to run the `Registration App` as a "bundler provider" and also run the `bundler server`,
>> working as a "version manager" for bundles.

Let's suppose we will run for Android platform, follow the steps below:

- For running `Registration App`, go to `rePackMiniApp` root folder, and type:
````bash
npm run android
````

- For running `bundler server`, go to `bundlerServer` root folder, and type:
````bash
npm run start
````

And lastly, run `reaPackSuperApp` going to its root folder, and type:
````bash

````

### Implementing lazy loading
Loading script based on build options
1 - COUNTRY=mx

![image](https://githubcloud.deere.com/storage/user/2006/files/e05fc9fb-2517-4d2a-b29c-7bfd694ddf4e)

2 - COUNTR=ag

![image](https://githubcloud.deere.com/storage/user/2006/files/36204bab-6df8-4ca2-9a3d-8de28395e88e)

### Implementing Module Federation
The goal was to load remote modules using Module Federation.

The next picture shows the architecture proposed.

![image](https://githubcloud.deere.com/storage/user/2006/files/c14fe70b-6b9f-4942-b457-1c83eecada72)


- In the first step, the remote module was provided by rePackMiniApp, running as a bundler server, using the command below:

````Javascript
react-native webpack-start --port 9001
````

And then loaded into rePackSuperApp, using rePacK API's.

![Screenshot 2023-06-06 at 17 49 09](https://githubcloud.deere.com/storage/user/2006/files/c63083ae-151e-4365-863e-b9dda70ebb1c)


And the app worked successfully, as shown in the video below:

https://githubcloud.deere.com/storage/user/2006/files/05471dd9-9c8d-4032-8f46-aa7d590af466


- In the second step, the remote module was built and stored on a CDN, using p1p3-web for providing it.

The bundle is available in this url: `https://meubanco-devl.deere.com/mini-app-bundle/rePackMiniApp.container.bundle`.

It has been created an web API for providing the location of remote bundles, as some docs suggests to do so. The [Bundle Server](https://githubcloud.deere.com/PRP2DK7/bundle-server) provided the bundle location.

And then, the Script Manager has been configured to get the bundle location from the Bundle Server as below:

````Javascript
const containersResponse = await fetch(
    'http://localhost:3000/repackminiapp?platform=android&appVersion=0.0.1',
  );

  const containers = await containersResponse.json();

  const resolveURL = Federated.createURLResolver({
    containers,
  });

  if (scriptId === 'rePackMiniApp') {
    const url = resolveURL(scriptId, caller);
    console.log(url);
    if (url) {
      return {
        url,
        query: {
          platform: Platform.OS,
        },
      };
    }
  }
````

The APP didn't work as expected, the application closes suddenly with no errors in the console, even using the Error Boundary to catch errors and log it.

The console when providing the bundle to the APP with no errors:

![Screenshot 2023-06-06 at 17 51 18](https://githubcloud.deere.com/storage/user/2006/files/e5739e58-1a9c-486b-9d78-a3a297e8910d)

App closing with no Errors visible:

https://githubcloud.deere.com/storage/user/2006/files/b2e04af3-14a4-41fd-b701-1eb2c10a56cd


An issue has been opened to RePack team, asking for clarification on this behavior and to check if there is something wrong with the configuration.
[Link to issue](https://github.com/callstack/repack/issues/375)

### Final thougths
RePack is a great tool for building Super/Mini apps and provides a lot of APIs and will cover all we need for our next app.

Drawbacks:
It require a lot of configuration, there are many errors that can appear if not configured right, and the team has to be aligned when using this approach.

### Tools used
https://github.com/IjzerenHein/react-native-bundle-visualizer
https://www.callstack.com/open-source/re-pack
# repack-spike-main
