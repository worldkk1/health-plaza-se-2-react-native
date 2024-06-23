import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from '@ui-kitten/components';
import { useLocalSearchParams, router } from 'expo-router'

import { storeScoreToLeaderboard } from '@/modules/leaderboard/service';

const ScorePage = () => {
  const { score } = useLocalSearchParams()
  const [name, setName] = useState('');

  const submitScore = async () => {
    if (score) {
      await storeScoreToLeaderboard(+score, name);
      router.replace('/leaderboard');
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.sectionScore]}>
        <Text style={{ fontSize: 32 }}>Your score is</Text>
        <Text style={{ fontSize: 98 }}>{score}</Text>
      </View>
      <View style={[styles.section, styles.sectionName]}>
        <Input
          value={name}
          label='Input your name'
          placeholder='eg. Quiz Hunsa'
          onChangeText={nextValue => setName(nextValue)}
        />
        <Button onPress={submitScore}>Submit</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    display: 'flex',
  },
  section: {
    flexGrow: 1
  },
  sectionScore: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionName: {
    gap: 20
  },
});

export default ScorePage;
