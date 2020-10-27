import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList163364Navigator from '../features/NotificationList163364/navigator';
import Settings163363Navigator from '../features/Settings163363/navigator';
import Settings163355Navigator from '../features/Settings163355/navigator';
import UserProfile163353Navigator from '../features/UserProfile163353/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList163364: { screen: NotificationList163364Navigator },
Settings163363: { screen: Settings163363Navigator },
Settings163355: { screen: Settings163355Navigator },
UserProfile163353: { screen: UserProfile163353Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
