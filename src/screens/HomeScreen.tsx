import { View, StyleSheet } from 'react-native';
import Searchbar from '../components/Searchbar';
import PagerViewContainer from '../components/PagerViewContainer';
import useLocation from '../utils/useLocation';

const HomeScreen = () => {
  const location = useLocation();

  return (
    <View style={styles.container}>
      <Searchbar />
      <PagerViewContainer location={location} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
  },
});

export default HomeScreen;
