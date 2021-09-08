import React from "react";
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Statistics from './components/Statistics/Statistics'
import Section from "./components/Section/Section";
import Notification from "./components/Notification/Notification";
import PropTypes from 'prop-types';


class App extends React.Component {


  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  increment = (name) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,

    }))

  };

  countTotalFeedback = (feedback) => {

    const valuesFeedback = Object.values(feedback)
    const totalFeedback = valuesFeedback.reduce((total, feedback) => {
      return (total += feedback);
    }, 0);
    return totalFeedback;

  }

  countPositiveFeedbackPercentage = (feedback) => {
    const goodFeedback = feedback.good;
    const valuesFeedback = Object.values(feedback)
    const totalFeedback = valuesFeedback.reduce((total, feedback) => {
      return (total += feedback);
    }, 0);
    return Math.round((goodFeedback / totalFeedback) * 100);
  }



  render() {

    return (
      <>

        <Section
          title="Please leave feedback"
        >
          < FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.increment}
          />

        </Section>




        <Section
          title="Statistics"
        >
          {this.countTotalFeedback(this.state) === 0 ? (<Notification message="No feedback given" />) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state
              )}
            />
          )}


        </Section>

      </>


    )
  }

}
export default App;

App.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
}