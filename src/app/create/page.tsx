"use client";
import { Logo, Button, Card, CardContent, CardTitle } from "@/components";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Header } from "@/components/header";
import { GoCopy, GoTrash } from "react-icons/go";
import { TQuestion } from "@/types";
import { useState } from "react";
import { QUESTIONS } from "@/mock";
import Image from "next/image";

export default function CreatePage() {
  // const { data: session } = useSession();
  const [questions, setQuestions] = useState<TQuestion[]>(QUESTIONS);
  const [selectedQuestion, setSelectedQuestion] = useState<TQuestion>(questions[0]);

  const duplicateQuestion = (index: number) => {
    const newQuestions = [...questions];
    newQuestions.splice(index + 1, 0, newQuestions[index]);
    setQuestions(newQuestions);
  };

  const removeQuestion = (index: number) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    const templateQuestion: TQuestion = {
      id: "q" + (questions.length + 1),
      text: "Enter your question",
      type: "quiz",
      image: "",
      options: [],
    };
    setQuestions((prev) => [...prev, templateQuestion]);
  };

  return (
    <div className="size-full">
      <Header />

      <div className="flex h-[calc(100%-52px)]">
        <aside className="flex flex-col">
          <div className="px-3 pt-2  flex-1 flex flex-col gap-4 overflow-y-auto">
            {questions.map((question, index) => (
              <div key={index}>
                <span className="ml-5">
                  {index + 1} {question.type}
                </span>
                <div className="flex justify-end gap-1">
                  {selectedQuestion.id === question.id && (
                    <div className="flex flex-col-reverse gap-2">
                      <button className="size-5 cursor-pointer" onClick={() => removeQuestion(index)}>
                        <GoTrash />
                      </button>
                      <button className="size-5 cursor-pointer" onClick={() => duplicateQuestion(index)}>
                        <GoCopy />
                      </button>
                    </div>
                  )}
                  <div className="w-[150px] h-[90px] border rounded-sm grid place-items-center bg-amber-800 cursor-pointer" onClick={() => setSelectedQuestion(question)}>
                    {question.type}
                    {question.id}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-3 grid place-items-center">
            <Button onClick={() => addQuestion()}>Add question</Button>
          </div>
        </aside>

        <div className="flex-1 bg-amber-200">
          <div className="flex flex-col p-5 gap-4">
            <p className="bg-white rounded-xl p-3 text-center text-2xl font-bold">{selectedQuestion.text}</p>
            <div className="mx-auto">
              <Image src={selectedQuestion.image} width={390} height={260} alt={selectedQuestion.text} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {selectedQuestion.options.map((option, index) => (
                <button key={index} className="bg-green-300 rounded-2xl p-4 cursor-pointer">
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const QuestionCard = ({ order, question }: { order: number; question: TQuestion }) => {
//   const title = (() => {
//     switch (question.type) {
//       case "quiz":
//         return "Quiz";
//       case "true-or-false":
//         return "True or False";
//       case "type-answer":
//         return "Type Answer";
//       case "puzzle":
//         return "Puzzle";
//     }
//   })();

//   return (
//     <div>
//       <span className="ml-5">
//         {order} {title}
//       </span>
//       <div className="flex gap-1">
//         <div className="flex flex-col-reverse gap-2">
//           <button className="size-5 cursor-pointer">
//             <GoTrash />
//           </button>
//           <button className="size-5 cursor-pointer" onClick={() => duplicate}>
//             <GoCopy />
//           </button>
//         </div>
//         <div className="w-[150px] h-[90px] border rounded-sm grid place-items-center bg-amber-800">{title}</div>
//       </div>
//     </div>
//   );
// };
