import { Text, View } from 'react-native';
import Home from '~/screens/home';

export default function App() {
  return (
    <View className='flex flex-1 items-center justify-center'>
      <Text className='text-2xl'>Hello World </Text>
      <Home />
    </View>
  );
}
