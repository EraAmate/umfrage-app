import React from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { getPoll } from "../api/polls";

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);

  React.useEffect(() => {
    async function doGetPoll() {
      const poll = await getPoll(pollId);

      setPoll(poll);
    }

    doGetPoll();
    // getPoll(pollId).then(poll => setPoll(poll));
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
    </Card>
  );
}

export default Result;
