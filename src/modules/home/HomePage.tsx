import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button } from '@ui-kitten/components';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View>
        <Link href="/about" asChild>
          <Button>Start</Button>
        </Link>
        <Link href="/" asChild>
          <Button>Leader board</Button>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
