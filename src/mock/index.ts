import { TQuestion } from "@/types";

export const QUESTIONS: TQuestion[] = [
  {
    id: "q1",
    text: "What is the capital of France?",
    type: "quiz",
    image: "https://random-image-pepebigotes.vercel.app/api/random-image",
    options: [
      { id: "1", text: "Paris" },
      { id: "2", text: "Madrid" },
      { id: "3", text: "Berlin" },
      { id: "4", text: "Rome" },
    ],
  },
  {
    id: "q2",
    text: "Is the Earth flat?",
    type: "true-or-false",
    image: "https://random-image-pepebigotes.vercel.app/api/random-image",
    options: [
      { id: "1", text: "True" },
      { id: "2", text: "False" },
    ],
  },
  {
    id: "q3",
    text: "Type the chemical symbol for water.",
    type: "type-answer",
    image: "https://random-image-pepebigotes.vercel.app/api/random-image",
    options: [{ id: "1", text: "H2O" }],
  },
  {
    id: "q4",
    text: "Arrange the planets in order from the sun.",
    type: "puzzle",
    image: "https://random-image-pepebigotes.vercel.app/api/random-image",
    options: [
      { id: "1", text: "Mercury" },
      { id: "2", text: "Venus" },
      { id: "3", text: "Earth" },
      { id: "4", text: "Mars" },
    ],
  },
  {
    id: "q5",
    text: "Which animal is known as the king of the jungle?",
    type: "quiz",
    image: "https://random-image-pepebigotes.vercel.app/api/random-image",
    options: [
      { id: "1", text: "Tiger" },
      { id: "2", text: "Lion" },
      { id: "3", text: "Elephant" },
      { id: "4", text: "Bear" },
    ],
  },
  {
    id: "q6",
    text: "The Great Wall of China can be seen from space.",
    type: "true-or-false",
    image: "https://random-image-pepebigotes.vercel.app/api/random-image",
    options: [
      { id: "1", text: "True" },
      { id: "2", text: "False" },
    ],
  },
  {
    id: "q7",
    text: "Type the largest ocean on Earth.",
    type: "type-answer",
    image: "https://random-image-pepebigotes.vercel.app/api/random-image",
    options: [{ id: "1", text: "Pacific Ocean" }],
  },
  {
    id: "q8",
    text: "Put these historical events in the correct order.",
    type: "puzzle",
    image: "https://random-image-pepebigotes.vercel.app/api/random-image",
    options: [
      { id: "1", text: "World War I" },
      { id: "2", text: "Moon Landing" },
      { id: "3", text: "Fall of Berlin Wall" },
      { id: "4", text: "Internet Launch" },
    ],
  },
  {
    id: "q9",
    text: "Which of these is a programming language?",
    type: "quiz",
    image: "https://random-image-pepebigotes.vercel.app/api/random-image",
    options: [
      { id: "1", text: "Python" },
      { id: "2", text: "Snake" },
      { id: "3", text: "Cobra" },
      { id: "4", text: "Viper" },
    ],
  },
  {
    id: "q10",
    text: "The human body has 206 bones.",
    type: "true-or-false",
    image: "https://random-image-pepebigotes.vercel.app/api/random-image",
    options: [
      { id: "1", text: "True" },
      { id: "2", text: "False" },
    ],
  },
];
