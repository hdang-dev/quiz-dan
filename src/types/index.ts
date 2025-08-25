export type TOption = {
  id: string,
  text: string
}
export type TQuestion = {
  id: string;
  text: string;
  type: "quiz" | "true-or-false" | "type-answer" | "puzzle";
  image: string;
  options: TOption[];
};

export type TAnswer = {
  id: string,
  questionId: string;
  correctOptions: TOption[]
}
