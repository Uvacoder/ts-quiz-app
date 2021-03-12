import * as React from "react";
import { AnswerObject } from "../App";

type QuestionCardProps = {
  question: string;
  answers: string[];
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function QuestionCard(props: QuestionCardProps) {
  return (
    <div className="question-card">
      <p>
        Question: {props.questionNr} / {props.totalQuestions}
      </p>
      <p>{props.question}</p>
      <div>
        {props.answers.map((answer) => (
          <div key={answer}>
            <button
              disabled={!!props.userAnswer}
              value={answer}
              onClick={props.callback}
            >
              <span>{answer}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
