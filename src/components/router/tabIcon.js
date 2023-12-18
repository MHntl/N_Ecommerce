import React from 'react';
import {Heart, Home2, Notification, Profile2User} from 'iconsax-react-native';
import {FAVORITES, HOME, NOTIFICATION, PROFILE} from '../../utils/routes';

const TabIcon = ({focused, color, size, route}) => {
  if (route.name === HOME) {
    return <Home2 color={color} variant={focused ? 'Bold' : 'Outline'} />;
  } else if (route.name === PROFILE) {
    return (
      <Profile2User color={color} variant={focused ? 'Bold' : 'Outline'} />
    );
  } else if (route.name === NOTIFICATION) {
    return (
      <Notification color={color} variant={focused ? 'Bold' : 'Outline'} />
    );
  } else if (route.name === FAVORITES) {
    return <Heart color={color} variant={focused ? 'Bold' : 'Outline'} />;
  }
};

export default TabIcon;
