import React from "react";
import "./CardTitle.css";

function CardTitle(props) {
  return <p className="cardTitle">{props.children}</p>;
}
export default CardTitle;
