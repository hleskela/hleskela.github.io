import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import 'animate.css';

function App() {

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: props.text, yes: props.yes, no: props.no};
    this.changeState = this.changeState.bind(this);
    this.positiveResponse = this.positiveResponse.bind(this);
    this.negativeResponse = this.negativeResponse.bind(this);
  }

  questions = {
                m1:<Question text="First things first, can you survive without it?" yes='m3' no='m2'/>,
                m2:<Question text='Is there a cheaper version of similar qualities that satisfies your needs?' yes='m10' no='m13'/>,
                m3:<Question text='Are you my girlfriend?' yes='m4' no='m12'/>,
                m4:<Question text='Have you thought this through?' yes='m5' no='m11'/>,
                m5:<Question text='For more than 10 minutes?' yes='m6' no='m11'/>,
                m6:<Question text='For more than 1 hour?' yes='m7' no='m11'/>,
                m7:<Question text='For more than a day?' yes='m8' no='m11'/>,
                m8:<Question text='Liar...' yes='m11' no='m11'/>,
                m9:<Question text='Then buy the expensive product!' yes='m1' no='m1'/>,
                m10:<Question text='Then buy the cheaper item!' yes='m1' no='m1'/>,
                m11:<Question text="Then don't buy it" yes='m1' no='m1'/>,
                m12:<Question text="Then buy it!" yes='m1' no='m1'/>,
                m13:<Question text='Can you rent, borrow, or find an alternative way of obtaining it?' yes='m11' no='m14'/>,
                m14:<Question text='Do you have to take a loan to get it?' yes='m16' no='m14'/>,
                m15:<Question text='Can you buy three of it with the money you have right now?' yes='m12' no='m11'/>,
                m16:<Question text="Then consider waiting until you can afford it without a loan... Don't buy it!" yes='m1' no='m1'/>,
             }

  animations = ['bounce',
                'flash',
                'pulse',
                'rubberBand',
                'shakeX',
                'shakeY',
                'headShake',
                'swing',
                'tada',
                'wobble',
                'jello',
                'heartBeat',
                'backInDown',
                'backInLeft',
                'backInRight',
                'backInUp',
                'bounceIn',
                'bounceInDown',
                'bounceInLeft',
                'bounceInRight',
                'bounceInUp',
                'fadeIn',
                'fadeInDown',
                'fadeInDownBig',
                'fadeInLeft',
                'fadeInLeftBig',
                'fadeInRight',
                'fadeInRightBig',
                'fadeInUp',
                'fadeInUpBig',
                'fadeInTopLeft',
                'fadeInTopRight',
                'fadeInBottomLeft',
                'fadeInBottomRight',
                'flipInX',
                'flipInY',
                'lightSpeedInRight',
                'lightSpeedInLeft',
                'rotateIn',
                'rotateInDownLeft',
                'rotateInDownRight',
                'rotateInUpLeft',
                'rotateInUpRight',
                'jackInTheBox',
                'rollIn',
                'zoomIn',
                'zoomInDown',
                'zoomInLeft',
                'zoomInRight',
                'zoomInUp'];

  animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
      const animationName = `${prefix}${animation}`;
      const node = document.querySelector(element);

      node.classList.add(`${prefix}animated`, animationName);

      // When the animation ends, we clean the classes and resolve the Promise
      function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }

      node.addEventListener('animationend', handleAnimationEnd, {once: true});
    });

  changeState(newText, yes_pointer, no_pointer) {
    this.setState({
      text: newText, yes: yes_pointer, no: no_pointer
    });
  }


  positiveResponse (){
    var question = this.questions[this.state.yes];
    var new_yes_pointer = question.props.yes;
    var new_no_pointer = question.props.no;
    this.changeState(question.props.text, new_yes_pointer, new_no_pointer);
    this.animateCSS('.question', this.animations[(Math.floor(Math.random() * (this.animations.length + 1))) % this.animations.length])
  }


  negativeResponse(){
    var question = this.questions[this.state.no];
    var new_yes_pointer =question.props.yes;
    var new_no_pointer =question.props.no;
    this.changeState(question.props.text, new_yes_pointer, new_no_pointer);
    this.animateCSS('.question', this.animations[(Math.floor(Math.random() * (this.animations.length + 1))) % this.animations.length])
  }


  render() {

    return (
      <div>
        <h1 className="question">{this.state.text}</h1>
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
            ]}
              variant="contained" size="large" fullWidth={true}
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
      <Question text='First things first, can you survive without it?' yes='m3' no='m2'/>
    </header>
  </div>
  );
}


export default App;
