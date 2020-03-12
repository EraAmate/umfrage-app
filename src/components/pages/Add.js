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
  return (
    <>
      <Card>
        <Link to="/vote">Vote!</Link>
        <form className="add-inputs-form">
          <input type="text" className="input" placeholder="question one" />
          <input type="text" className="input" placeholder="question two" />
          <input type="text" className="input" placeholder=" next question" />
        </form>
      </Card>
    </>
  );
}

export default Add;
