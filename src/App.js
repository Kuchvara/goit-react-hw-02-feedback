import React from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions ";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import Section from "./components/Section/Section";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }  

  incrementHandler = (option) => {
    console.log(option)
    this.setState(prevState => (
      {[option]: prevState.[option] + 1}
    ));
  };

  countTotalFeedback = () => (
    this.state.good + this.state.neutral + this.state.bad       
  );

  countPositiveFeedbackPercentage = () => (
    (this.state.good / this.countTotalFeedback()) * 100
  )     
   
  render() {
    return (
      <Section title="Please leave feedback">        
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={this.incrementHandler}/>
        <h2>Statistics</h2>
        {this.countTotalFeedback() <= 0 ?
          <Notification message="No feedback given" />
          : <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}/>
        }            
      </Section>
    )
}}

export default App;