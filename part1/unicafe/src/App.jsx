import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from './components/Button';
import { StatisticLine } from './components/StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h2>Statistics</h2>

      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={good + neutral + bad} />
          <StatisticLine
            text="Average"
            value={(good - bad) / (good + bad + neutral)}
          />
          <StatisticLine
            text="Positive"
            value={(good / (bad + good + neutral)) * 100 + '%'}
          />
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGod = () => {
    setGood(good + 1);
  };
  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handle={handleClickGod} text="Good" />
      <Button handle={handleClickNeutral} text="Neutral" />
      <Button handle={handleClickBad} text="Bad" />

      {good + neutral + bad ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default App;
