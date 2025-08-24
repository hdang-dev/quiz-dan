export type TQuestion = {
  id: string;
  text: string;
  type: "quiz" | "true-or-false" | "type-answer" | "puzzle";
  image: string;
  options: {
    id: string;
    text: string;
  }[];
};
