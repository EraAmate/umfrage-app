import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import styled from "@emotion/styled";

import CardTitle from "../CardTitle";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const Input = styled.input`
  margin-top: 15px;
  width: 250px;
  border: none;
  border-bottom: 1px solid;
`;
const Button = styled.button`
  z-index: 10;
  position: relative;
  bottom: 0;
  position: fixed;
  font-size: 25px;
  color: teal;
  cursor: pointer;
  border: none;
  height: 40px;
  width: 200px;
  background-color: none;
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
      answerThree: answerThree
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
          <Input
            type="text"
            className="input"
            placeholder=" your question "
            value={question}
            onChange={event => {
              setQuestion(event.target.value);
            }}
          />
          <Input
            type="text"
            className="input"
            placeholder="answer"
            value={answerOne}
            onChange={event => setAnswerOne(event.target.value)}
          />

          <Input
            type="text"
            className="input"
            placeholder=" answer"
            value={answerTwo}
            onChange={event => setAnswerTwo(event.target.value)}
          />

          <Input
            type="text"
            className="input"
            placeholder="answer"
            value={answerThree}
            onChange={event => setAnswerThree(event.target.value)}
          />
          <Button>Submit</Button>
        </Form>

        <Link to="/vote">Vote!</Link>
      </Card>
    </>
  );
}

export default Add;
