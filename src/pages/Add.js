import React from "react";
import { useHistory } from "react-router-dom";

import Form from "../components/Form";
import Card from "../components/Card";
import styled from "@emotion/styled";
import CardTitle from "../components/CardTitle";
import Button from "../components/Button";
import { postPoll } from "../api/polls";

const Input = styled.input`
  margin-top: 15px;
  width: 250px;
`;
const QuestionInput = styled(Input)`
  background: ${props => props.theme.colors.inputPrimary};
  border: 2px solid #707070;
  padding: 6px 10px;
  font-weight: bold;
`;
const AnswerInput = styled(Input)`
  background: none;
  border: none;
  border-bottom: 1px solid #707070;
  padding: 6px 10px;
`;

function Add() {
  const history = useHistory();

  const [question, setQuestion] = React.useState("");
  const [answerOne, setAnswerOne] = React.useState("");
  const [answerTwo, setAnswerTwo] = React.useState("");
  const [answerThree, setAnswerThree] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      votes: []
    };
    const createdPoll = await postPoll(poll);
    history.push(`/polls/${createdPoll.id}/vote`);
  }

  return (
    <>
      <Card>
        <CardTitle>Write down your question</CardTitle>
        <Form onSubmit={handleSubmit}>
          <QuestionInput
            type="text"
            className="input"
            placeholder=" your question "
            value={question}
            onChange={event => {
              setQuestion(event.target.value);
            }}
          />
          <AnswerInput
            type="text"
            className="input"
            placeholder="answer"
            value={answerOne}
            onChange={event => setAnswerOne(event.target.value)}
          />
          <AnswerInput
            type="text"
            className="input"
            placeholder=" answer"
            value={answerTwo}
            onChange={event => setAnswerTwo(event.target.value)}
          />
          <AnswerInput
            type="text"
            className="input"
            placeholder="answer"
            value={answerThree}
            onChange={event => setAnswerThree(event.target.value)}
          />
          <Button>Submit</Button>
        </Form>
      </Card>
    </>
  );
}

export default Add;
