import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {Navigation} from 'react-native-navigation';

import App from './App';
import Overlay from './Overlay';

Navigation.registerComponent('com.rnnSandbox.WelcomeScreen', () =>
  gestureHandlerRootHOC(App),
);
Navigation.registerComponent('com.rnnSandbox.Overlay', () => Overlay);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.rnnSandbox.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
});
