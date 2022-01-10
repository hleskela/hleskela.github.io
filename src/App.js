import './App.css';
import React from 'react';
import Button from '@mui/material/Button';

function App() {

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.text = props.text;
    this.yes_question_pointer = props.yes;
    this.no_question_pointer = props.no;
    this.state = {text: 'First things first, can I survive without it?', count: 1};

    this.changeText = this.changeText.bind(this);
    this.positiveResponse = this.positiveResponse.bind(this);
    this.negativeResponse = this.negativeResponse.bind(this);
  }

  questions = ['First things first, can I survive without it?',
               'Is there a cheaper version of similar qualities that satisfies your needs?',
               'Are you my girlfriend?',
               'Have you thought this through?',
               'For more than 10 minutes?',
               'For more than 1 hour?',
               'For more than a day?',
               'Liar...']

  questions2 = {m1:<Question text="First things first, can I survive without it?" yes='m3' no='m2'/>,
               m2:<Question text='Is there a cheaper version of similar qualities that satisfies your needs?' yes='m10' no='m9'/>,
               m3:<Question text='Are you my girlfriend?' yes='m3' no='m2'/>,
               m4:'Have you thought this through?',
               m5:'For more than 10 minutes?',
               m6:'For more than 1 hour?',
               m7:'For more than a day?',
               m8:'Liar...',
               m9:'Then buy it!',
               m10:'Then buy the cheaper item!'}

  changeText(newText) {
    this.setState({
      text: newText
    })
  }
  
  
  positiveResponse (){
    this.changeText(this.questions2[this.yes_question_pointer].props.text);
  }

  negativeResponse(){
    this.changeText(this.questions2[this.no_question_pointer].props.text);
  }

  render() {
    var t = this.questions2["m1"];
    console.log(t.props.text);
    return (
      <div>
        <h1>{this.state.text}</h1>
        <div className="buttons">
            <Button 
            sx={[{ borderRadius: 35,
                backgroundColor: "#4B9AAA",
                color: "#F7E1D7",
                padding: "18px 16px",
                fontSize: "18px"
              },
              {
                '&:hover': {
                  color: "#F7E1D7",
                  backgroundColor: "#6DB1BF",
                }}
            ]}
            variant="contained" size="large" fullWidth={true}
             onClick={this.positiveResponse}><h2>Yes</h2></Button>
            <Button sx={[{ borderRadius: 95,
                backgroundColor: "#4B9AAA",
                color: "#F7E1D7",
                padding: "18px 16px",
                fontSize: "18px"
              },
              {
                '&:hover': {
                  color: "#F7E1D7",
                  backgroundColor: "#6DB1BF",
                }}
            ]}variant="contained" size="large" fullWidth={true}
             color="primary" onClick={this.negativeResponse}><h2>No</h2></Button>
        </div>
      </div>
    );
  }
}

return (
  <div className="App">
    <header className="App-header">
    <h1 className="titleText">Should I Buy It?</h1>
      <Question yes='m3' no='m2'/>
    </header>
  </div>
  );
}

export default App;
