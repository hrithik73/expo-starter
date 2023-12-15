import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';

import Home from '~/screens/home';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: () => <AntDesign name='home' size={24} color='black' />,
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeNavigator;
