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

  const answerOneVotes = poll?.votes.filter(vote => vote === "answerOne")
    .length;
  const answerTwoVotes = poll?.votes.filter(vote => vote === "answerTwo")
    .length;
  const answerThreeVotes = poll?.votes.filter(vote => vote === "answerThree")
    .length;

  return (
    <Card>
      <h2>
        {poll?.question} ({poll?.votes.length} votes)
      </h2>
      <div>
        {poll?.answerOne} ({answerOneVotes} votes)
      </div>
      <div>
        {poll?.answerTwo} ({answerTwoVotes} votes)
      </div>
      <div>
        {poll?.answerThree} ({answerThreeVotes} votes)
      </div>
      <Link to="/">Add!</Link>
    </Card>
  );
}

export default Result;
