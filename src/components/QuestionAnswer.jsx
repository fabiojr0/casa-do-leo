import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import React from "react";

function QuestionAnswer() {
  const list = [
    {
      question: "Como posso doar?",
      answer: "Basta clicar no botão fazer doação e preencher o formulário e esperar nossa resposta",
    },
    {
      question: "Quantas famílias são beneficiadas?",
      answer: "Atualmente 10 famílias recebem as doações",
    },
    {
    question: "Recebem doação em dinheiro?",
      answer: "Boa pergunta",
    },
  ];

  return (
    <ul className={`flex flex-col gap-2 sm:gap-4 w-full p-2 lg:p-10 `}>
      {list.map((item, index) => (
        <div key={index} >
          <Accordion>
            <AccordionSummary >
              <Typography sx={{fontWeight: "bold"}}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{color: "#219653"}}>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </ul>
  );
}

export default QuestionAnswer;
