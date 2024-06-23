import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from '@ui-kitten/components';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text category="h1">
          Quiz Hunsa
        </Text>
        <Text category="h1" style={styles.logo}>
          🤖
        </Text>
      </View>
      <View style={styles.buttonControl}>
        <Link href="/quiz" asChild>
          <Button>Start</Button>
        </Link>
        <Link href="/Leaderboard" asChild>
          <Button>Leaderboard</Button>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
  titleContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 200,
  },
  buttonControl: {
    height: '30%',
    paddingHorizontal: 75,
    gap: 10,
  }
});

export default HomePage;
