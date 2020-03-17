import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import { useParams, useHistory } from "react-router-dom";
import Button from "../Button";
import Form from "../Form";
import RadioInput from "../RadioInput";

const POLLS_API_URL =
  process.env.REACT_APP_API_POLLS ||
  `https://my-json-server.typicode.com/EraAmate/umfrage-app/polls`;

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }

    getPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await fetch(`${POLLS_API_URL}/${pollId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPoll)
    });
    history.push(`/polls/${poll.id}`);
  }

  const options = ["answerOne", "answerTwo", "answerThree"];

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <h2>{poll?.question}</h2>
        {options.map(option => (
          <RadioInput
            key={option}
            checked={answer === option}
            onChange={event => setAnswer(event.target.value)}
            value={option}
            label={poll?.[option]}
            name="answer"
          />
        ))}
        <Button>Vote</Button>
      </Form>
      <Link to="/polls/:pollId">Result!</Link>
    </Card>
  );
}

export default Vote;
