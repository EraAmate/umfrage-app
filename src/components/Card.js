import React from "react";
import "./Card.css";
// import CardTitle from "../components/CardTitle";

function Card(props) {
  return (
    <>
      <div className="section">{props.children}</div>
    </>
  );
}
export default Card;
