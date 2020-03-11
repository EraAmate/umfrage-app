import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

function Vote() {
  return (
    <Card>
      <Link to="/result">Result!</Link>
    </Card>
  );
}

export default Vote;
