import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

// function CardHeader (){
// ////
// }

// function Input () {
//   return <input> </input>
// }

function Add() {
  return (
    <>
      <Card>
        <Link to="/vote">Vote!</Link>
        <form className="inputs-form">
          <input type="input" placeholder="question one" />
          <input type="input" placeholder="question two" />
          <input type="input" placeholder=" next question" />
        </form>
      </Card>
    </>
  );
}

export default Add;
