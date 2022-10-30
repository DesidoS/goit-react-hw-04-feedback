import { useState } from 'react';
// conponents //
import FeedbackButton from './FeedbackButton';
import Statistics from './Statistics';
import Section from './Section';
// styles //
import { Container } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = btnName => {
    switch (btnName) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        throw new Error('Not supported type');
    }
  };

  const total = good + neutral + bad;
  const positivePercent = Math.round((good / total) * 100);
  const options = Object.keys({ good, neutral, bad });

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackButton onLeaveFeedback={onLeaveFeedback} options={options} />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercent={positivePercent}
        />
      </Section>
    </Container>
  );
};

export default App;
