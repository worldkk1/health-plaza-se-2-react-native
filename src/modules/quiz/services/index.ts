import { shuffleArray } from '@/utils/array';

import QuizData from './quiz-data';

import { Quiz } from '../interfaces';

export const fetchQuiz = async (): Promise<Quiz[]> => {
  const randomQuiz: Quiz[] = shuffleArray(QuizData);

  return await Promise.resolve(randomQuiz);
}
