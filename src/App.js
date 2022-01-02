import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';

function App() {

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.text1 = props.text;
    this.yes_question_pointer = props.yes;
    this.no_question_pointer = props.no;
    this.state = {text: 'Can you survive without it?', count: 1};

    this.changeText = this.changeText.bind(this);
    this.testFunction = this.testFunction.bind(this);
    this.increment = this.increment.bind(this);
    this.negativeResponse = this.negativeResponse.bind(this);
  }

  questions = ['Can you survive without it?',
               'Is there a cheaper version of similar qualities that satisfies your needs?',
               'Is your name Joanna?',
               'Have you thought this through?',
               'For more than 10 minutes?',
               'For more than 1 hour?',
               'For more than a day?',
               'Liar...']

  questions2 = {m1:<Question text1="Can you survive without it?" yes='m3' no='m2'/>,
               m2:'Is there a cheaper version of similar qualities that satisfies your needs?',
               m3:'Is your name Joanna?',
               m4:'Have you thought this through?',
               m5:'For more than 10 minutes?',
               m6:'For more than 1 hour?',
               m7:'For more than a day?',
               m8:'Liar...'}

  changeText(newText) {
    this.setState({
      text: newText
    })
  }
  
  increment(){
    this.setState({
      count: this.state.count+1
    })
  }
  
  testFunction (){
    this.increment();
    this.changeText(this.questions[this.state.count]);
  }

  negativeResponse(){
    this.changeText('Then buy it!')
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <div id="buttons">
            <Button variant="contained" size="large" fullWidth={true} color="primary" onClick={this.testFunction}><h2>Yes</h2></Button>
            <Button variant="contained" size="large" fullWidth={true} color="primary" onClick={this.negativeResponse}><h2>No</h2></Button>
        </div>
      </div>
    );
  }
}

function handleClick(props) {
  return console.log('yo')
}


function GenerateText(props) {
  return <h1>{props.name}</h1>;
}

function GetPercentage() {
  return 10+"%";
}

  return (
    <div className="App">
      <header className="App-header">
      <h1>Should I Buy It?</h1>
        <p className="rainbow-text">Life throws challenges and every challenge comes with rainbows and lights to conquer it.</p>
        <Question />
      </header>
    </div>
  );
}

export default App;

/**<footer className="App-footer"> progress bar at <GetPercentage/></footer>*/
