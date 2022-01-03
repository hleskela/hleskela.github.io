import './App.css';
import React from 'react';
import Button from '@mui/material/Button';

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
               'Are you my girlfriend?',
               'Have you thought this through?',
               'For more than 10 minutes?',
               'For more than 1 hour?',
               'For more than a day?',
               'Liar...']

  questions2 = {m1:<Question text1="Can you survive without it?" yes='m3' no='m2'/>,
               m2:'Is there a cheaper version of similar qualities that satisfies your needs?',
               m3:'Are you my girlfriend?',
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
    var t = this.questions2["m1"];
    console.log(t.props.text1);
    return (
      <div>
        <h1>{this.state.text}</h1>
        <div id="buttons">
            <Button variant="contained" size="large" fullWidth={true}
             color="primary" onClick={this.testFunction}><h2>Yes</h2></Button>
            <Button variant="contained" size="large" fullWidth={true}
             color="primary" onClick={this.negativeResponse}><h2>No</h2></Button>
        </div>
      </div>
    );
  }
}

return (
  <div className="App">
    <header className="App-header">
    <h1>Should I Buy It?</h1>
      <Question />
    </header>
  </div>
  );
}

export default App;
