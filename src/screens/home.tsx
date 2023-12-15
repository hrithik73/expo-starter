import { Text, View } from 'react-native';
import HomeIcon from '~/assets/images/home.svg';

const Home = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text>Hello</Text>
      <HomeIcon />
    </View>
  );
};
export default Home;
