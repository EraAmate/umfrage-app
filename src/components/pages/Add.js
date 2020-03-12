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
        {/* <p className="cardTitle" /> */}
        <form className="add-inputs-form">
          <input type="text" className="input" placeholder="question one" />
          <input type="text" className="input" placeholder="question two" />
          <input type="text" className="input" placeholder=" next question" />
        </form>
        <Link to="/vote">Vote!</Link>
      </Card>
    </>
  );
}

export default Add;
