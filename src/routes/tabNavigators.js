import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FAVORITES, HOME, NOTIFICATION, PROFILE} from '../utils/routes';
import Home from '../screens/home';
import Profile from '../screens/profile';
import Notification from '../screens/notification';
import Favorites from '../screens/favorites';
import TabIcon from '../components/router/tabIcon';
import {AppColors} from '../theme/appColors';
import {Text} from 'react-native';
import HeaderRight from '../components/router/headerRight';

const Tab = createBottomTabNavigator();
export default function TabNavigator({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerRight: () => <HeaderRight navigation={navigation} />,
        tabBarIcon: ({focused, color, size}) => {
          return (
            <TabIcon
              focused={focused}
              color={color}
              size={size}
              route={route}
            />
          );
        },
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarInactiveTintColor: AppColors.SECONDARY,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={FAVORITES} component={Favorites} />
      <Tab.Screen name={NOTIFICATION} component={Notification} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
