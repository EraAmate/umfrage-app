import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import "./Add.css";

// function CardHeader (){
// ////
// }

// function Input () {
//   return <input> </input>
// }

function Add() {
  const [question, setQuestion] = React.useState("");
  const [answerOne, setAnswerOne] = React.useState("");
  const [answerTwo, setAnswerTwo] = React.useState("");
  const [answerThree, setAnswerThree] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(inputsRes));
  }
  const inputsRes = {
    question: question,
    answerOne: answerOne,
    answerTwo: answerTwo,
    answerThree: answerThree
  };

  return (
    <>
      <Card>
        <p className="cardTitle">Write down your questions</p>
        <form className="add-inputs-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            placeholder=" your question "
            value={question}
            onChange={event => {
              setQuestion(event.target.value);
            }}
          />
          <input
            type="text"
            className="input"
            placeholder="answer"
            value={answerOne}
            onChange={event => setAnswerOne(event.target.value)}
          />

          <input
            type="text"
            className="input"
            placeholder=" answer"
            value={answerTwo}
            onChange={event => setAnswerTwo(event.target.value)}
          />

          <input
            type="text"
            className="input"
            placeholder="answer"
            value={answerThree}
            onChange={event => setAnswerThree(event.target.value)}
          />
          <button className="btn">Submit</button>
        </form>

        <Link to="/vote">Vote!</Link>
      </Card>
    </>
  );
}

export default Add;
