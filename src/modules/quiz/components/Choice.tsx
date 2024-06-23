import { Button } from '@ui-kitten/components';

interface Props {
  choice: string;
  onSelectAnswer: (choice: string) => void;
}

const Choice = (props: Props) => {
  const { choice, onSelectAnswer } = props;

  return (
    <Button status='info' onPress={() => onSelectAnswer(choice)}>
      {decodeURIComponent(choice)}
    </Button>
  )
}

export default Choice;
