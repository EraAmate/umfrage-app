import React from "react";
import { Link } from "react-router-dom";

import Form from "../Form";
import Card from "../Card";
import styled from "@emotion/styled";

import CardTitle from "../CardTitle";
import Button from "../Button";

const Input = styled.input`
  margin-top: 15px;
  width: 250px;
`;
const QuestionInput = styled(Input)`
  background: #fff;
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

    const response = await fetch(
      process.env.REACT_APP_API_POLLS ||
        `https://my-json-server.typicode.com/EraAmate/umfrage-app/polls`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(poll)
      }
    );
    const createdNewPoll = await response.json();

    alert(`New poll is created with the id ${createdNewPoll.id}`);
  }

  return (
    <>
      <Card>
        <CardTitle>Write down your questions</CardTitle>
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

        <Link to="/polls/:pollId/vote">Vote!</Link>
      </Card>
    </>
  );
}

export default Add;
