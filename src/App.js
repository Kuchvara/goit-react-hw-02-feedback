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
    this.setState(prevState => (
      {[option]: prevState.[option] + 1}
    ));
  };

  countTotalFeedback = () => {
    const stateValues = Object.values(this.state);

    const summ = stateValues.reduce((acc, value) => acc + value, 0);
    
    return summ;
  };

  // countTotalFeedback = () => (
  //   this.state.good + this.state.neutral + this.state.bad       
  // );

  countPositiveFeedbackPercentage = () => (
    (this.state.good / this.countTotalFeedback()) * 100
  )     
   
  render() {
    const data = this.state;
    
    return (
      <Section title="Please leave feedback">        
        <FeedbackOptions
          options={data}
          onLeaveFeedback={this.incrementHandler}/>
        <h2>Statistics</h2>
        {this.countTotalFeedback() > 0 ? <Statistics
            good={data.good}
            neutral={data.neutral}
            bad={data.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}/>          
          : <Notification message="No feedback given" />           
        }            
      </Section>
    )
}}

export default App;