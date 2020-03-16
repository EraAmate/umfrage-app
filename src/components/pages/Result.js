import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import { useParams } from "react-router-dom";

const POLLS_API_URL =
  process.env.REACT_APP_API_POLLS ||
  "https://my-json-server.typicode.com/EraAmate/umfrage-app/polls";

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }

    getPoll();
  }, [pollId]);

  return (
    <Card>
      <h2>{poll?.question}</h2>
      <div>{poll?.answerOne}</div>
      <div>{poll?.answerTwo}</div>
      <div>{poll?.answerThree}</div>
      <Link to="/">Add!</Link>
    </Card>
  );
}

export default Result;
