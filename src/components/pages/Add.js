import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";

function Add() {
  return (
    <Card>
      <Link to="/vote">Vote!</Link>
    </Card>
  );
}

export default Add;
