import StatisticsLine from "./StatistcsLine";

import { useState } from "react";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const average = good - bad / total;
  const positivePercentage = (good / total) * 100 + "%";

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(good + 1)}>bad</button>

      <table>
        <thead>
          <h2>Statistics</h2>
        </thead>
        <tbody>
          <StatisticsLine />
          <StatisticsLine text="Good" value={good} />
          <StatisticsLine text="Neutral" value={neutral} />
          <StatisticsLine text="Bad" value={bad} />
          <StatisticsLine text="all" value={total} />
          <StatisticsLine text="Average" value={average} />
          <StatisticsLine text="Positive" value={positivePercentage} />
        </tbody>
      </table>
    </>
  );
}

export default App;
