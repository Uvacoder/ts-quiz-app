import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  ammount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${ammount}&difficulty=${difficulty}&type=multiple`;
  const data: { results: Question[] } = await (await fetch(endpoint)).json();
  const result: QuestionState[] = data.results.map((ques) => ({
    ...ques,
    answers: shuffleArray([ques.correct_answer, ...ques.incorrect_answers]),
  }));
  return result;
};
