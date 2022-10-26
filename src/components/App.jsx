import { Component } from 'react';
// conponents //
import FeedbackButton from './FeedbackButton';
import Statistics from './Statistics';
import Section from './Section';
// styles //
import { Container } from './App.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = btn => {
    this.setState(prevState => ({
      [btn]: prevState[btn] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackButton
            onLeaveFeedback={this.onLeaveFeedback}
            options={this.state}
          />
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
  }
}

export default App;
