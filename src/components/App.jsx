import { Component } from 'react';
import { Statistics } from './statistics/statistics';
import { Section } from './section/section';
import { FeedbackOptions } from './feedback/feedback.jsx';
import { Notification } from 'components/notification/notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const { textContent } = event.target;

    this.setState(prevState => {
      return {
        [textContent]: prevState[textContent] + 1,
      };
    });
  };
  countTotalFeedback = (good, neutral, bad) => {
    let totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = (good, bad) => {
    let totalPositive = (good / (good + bad)) * 100;
    return Math.round(totalPositive);
  };
  render() {
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <h1>Statistics</h1>
        {this.countTotalFeedback(
          this.state.good,
          this.state.bad,
          this.state.neutral
        ) ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification title={'There is no feedback'} />
        )}
      </Section>
    );
  }
}
