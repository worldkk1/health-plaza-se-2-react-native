import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

import { shuffleArray } from '@/utils/array';

import Choice from './components/Choice';
import Question from './components/Question';
import { fetchQuiz } from './services';

interface Quiz {
  question: string;
  choices: string[];
  answer: string;
}

const QuizPage = () => {
  const [quizNo, setQuizNo] = useState(0);
  const [quizList, setQuizList] = useState<Quiz[]>([]);
  const [quiz, setQuiz] = useState<Quiz>({
    question: '',
    choices: [],
    answer: '',
  });
  const [score, setScore] = useState(0);

  const initialQuiz = async () => {
    const quizzes = await fetchQuiz();
    const _quizList = quizzes.map((_quiz) => ({
      question: _quiz.question,
      choices: shuffleArray([_quiz.correct_answer, ..._quiz.incorrect_answers]),
      answer: _quiz.correct_answer,
    }));
    setQuizList(_quizList);
    setQuizNo(1);
  }

  const updateQuiz = () => {
    const _quiz = quizList[quizNo - 1];
    setQuiz(_quiz);
  }

  const handleSelectAnswer = (choice: string) => {
    if (quizNo > quizList.length) {
      return;
    }
    if (choice === quiz.answer) {
      setScore(score + 1);
    }
    setQuizNo(quizNo + 1);
  }

  const handleEndGame = async () => {
    router.replace({ pathname: '/score', params: { score }});
  }

  useEffect(() => {
    initialQuiz()
  }, []);

  useEffect(() => {
    if (quizNo > 0 && quizNo <= quizList.length) {
      updateQuiz();
    } else if (quizNo > quizList.length) {
      handleEndGame();
    }
  }, [quizNo]);

  return (
    <View style={styles.container}>
      <View style={[styles.section, styles.sectionQuestion]}>
        <Text>Question {quizNo} of {quizList.length}</Text>
        <Question question={quiz?.question} />
      </View>
      <View style={[styles.section, styles.sectionChoice]}>
        {quiz?.choices.map((choice, index) => {
          return (
            <Choice key={index} choice={choice} onSelectAnswer={handleSelectAnswer} />
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
  },
  section: {
    width: '100%',
    height: '50%',
  },
  sectionQuestion: {
    gap: 10,
    paddingTop: '30%',
  },
  sectionChoice: {
    gap: 10,
  },
});

export default QuizPage;
