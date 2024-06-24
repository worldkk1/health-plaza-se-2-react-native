import AsyncStorage from '@react-native-async-storage/async-storage';

import { Leaderboard } from '../interfaces';

export const getLeaderboard = async () => {
  try {
    let scoreList: Leaderboard[] = [];
    const value = await AsyncStorage.getItem('score-board');
    if (value) {
      scoreList = JSON.parse(value);
    }

    return scoreList;
  } catch (error) {
    console.error(error);
  }
}

export const storeScoreToLeaderboard = async (score: number, playerName: string) => {
  try {
    const leaderboard = await getLeaderboard();
    if (leaderboard) {
      leaderboard.push({
        score,
        playerName,
        playedAt: new Date(),
      });
      await AsyncStorage.setItem('score-board', JSON.stringify(leaderboard));
    }
  } catch (error) {
    console.error(error);
  }
}

export const clearLeaderboard = async () => {
  await AsyncStorage.clear();
}
