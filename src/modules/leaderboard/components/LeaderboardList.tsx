import { List, ListItem, Text } from '@ui-kitten/components';

import { Leaderboard } from '../interfaces';

interface Props {
  data: Leaderboard[]
}

const Item = ({ item, index }: { item: Leaderboard; index: number }) => {
  return (
    <ListItem
      title={item.playerName || 'Unknown'}
      description={`${item.playedAt ? new Date(item.playedAt).toLocaleDateString('th') : ''}`}
      accessoryLeft={<Text>{index + 1}</Text>}
      accessoryRight={<Text>{item.score}</Text>}
    />
  )
}

const LeaderboardList = (props: Props) => {
  const { data } = props;

  return (
    <List
      data={data}
      renderItem={Item}
    />
  )
}

export default LeaderboardList;
