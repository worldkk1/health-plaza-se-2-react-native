import { useEffect, useState } from 'react';
import { Button, Text } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';

import LeaderboardList from './components/LeaderboardList';
import { Leaderboard } from './interfaces';
import { getLeaderboard, clearLeaderboard } from './service';
import { Link } from 'expo-router';

const LeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState<Leaderboard[]>([]);

  const initialLeaderboard = async () => {
    const _leaderboard = await getLeaderboard();
    if (_leaderboard) {
      _leaderboard.sort((a, b) => b.score - a.score);
      setLeaderboard(_leaderboard);
    }
  }

  const handleClearLeaderboard = async () => {
    await clearLeaderboard();
    setLeaderboard([]);
  }

  useEffect(() => {
    initialLeaderboard();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.sectionTitle}>
        <Text style={styles.title}>Leaderboard</Text>
        <Button size="tiny" status="danger" onPress={handleClearLeaderboard}>
          Clear leaderboard
        </Button>
      </View>
      <LeaderboardList data={leaderboard} />
      <View style={styles.sectionButton}>
        <Link href="/" asChild>
          <Button>Home</Button>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 30,
    paddingHorizontal: 10,
    display: 'flex',
  },
  sectionTitle: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 32
  },
  sectionButton: {
    paddingBottom: 30
  },
});

export default LeaderboardPage;
