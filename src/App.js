import React, { Component } from 'react';
import User from './user';
import Computer from './computer';
import Score from './score';
import Button from './button'

export default class App extends Component {
  state={
    number:[1, 2, 3, 4, 5, 6],
    user:[],
    computer:[]
  }
   
startTheGame=()=>{
  document.getElementById('idH3Computer').style.display= 'block';
  document.getElementById('idH3User').style.display= 'block';

  
  if(this.state.user.length< this.state.number.length/2) {
      for(let i =0; i<this.state.number.length/2; i++) {
           const randomIndex= Math.round(Math.random()* (this.state.number.length-1)); 
           this.setState((prevState)=> ({user:prevState.user.concat(this.state.number[randomIndex]) }));
      } 
  }
  if(this.state.computer.length< this.state.number.length/2) {
    for(let i =0; i<this.state.number.length/2; i++) {
         const randomIndex= Math.round(Math.random()* (this.state.number.length-1)); 
         this.setState((prevState)=> ({computer:prevState.computer.concat(this.state.number[randomIndex]) }));
    } 
  }
  document.getElementById('score').classList.add('score');

}

reloladHandler=()=>{
  this.setState({computer:[] });
  this.setState({user:[] });
  document.getElementById('idH3Computer').style.display= 'none';
  document.getElementById('idH3User').style.display= 'none';
  document.getElementById('score').classList.remove('score');
}

  render() {
    let userScore = 0;
    let computerScore = 0; 
    for (let i=0; i<this.state.user.length; i++){
      userScore += this.state.user[i];
      computerScore += this.state.computer[i];
    }

    let winner;
    if (userScore === computerScore && this.state.user.length>1 ){
      winner =(
        <h3 className='winner'>The player and the computer have the same number of points... </h3>
      )
    } else if (userScore < computerScore ){
      winner =(
        <h3  className='winner'>The computer won !!! </h3>
      )} else if (userScore > computerScore ){
        winner =(
          <h3 className='winner'>The player won !!! </h3>
        )}

    let idUser = 1;
    let idComputer = 10;

    let container= {
      width: '50vw',
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      justifyContent: 'center',
      alignAtems:'center',
      margin: '2rem auto',
      border: 'solid',
      borderColor: ' rgb(7, 4, 39)',
      borderRadius: '10px ',
      color: 'rgb(2, 3, 80)',
      backgroundColor: ' rgba(196, 196, 245, 0.493)'
    }

    return (
      <div style={container} >
        <h1>Welcome to the game</h1>
        <p>Press the button</p>
        <Button start={ this.startTheGame} reloadPage={this.reloladHandler} textStart='Start' textReload='ReStart' />
        <h3 id="idH3User" >User :</h3>
        <div className="user">
          {this.state.user.map((playerNum)=>{
            return <User idU={++idUser} key={'id' + +idUser } takeNumber={playerNum} />
          }) }
        </div>
        <h3 id="idH3Computer">Computer :</h3>
        <div className="computer">
        {this.state.computer.map((computerNum)=>{
            return <Computer idC={++idComputer} key={'id' +idComputer} takeNumber={computerNum} />
          }) }
        </div>
        <Score usersScore={userScore} computersScore={computerScore} />
        {winner}
        
      </div>
    )
  }
}
