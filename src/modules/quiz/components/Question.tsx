import { StyleSheet, Text } from 'react-native';

interface Props {
  question: string;
}

const Question = (props: Props) => {
  const { question } = props;

  return <Text style={styles.title}>{decodeURIComponent(question)}</Text>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
});

export default Question;
