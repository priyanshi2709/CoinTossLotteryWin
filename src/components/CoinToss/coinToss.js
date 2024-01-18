// Write your code here

import './coinToss.css'
import {Link, Route, Routes} from 'react-router-dom';
import {Component} from "react";
import LotteryOne from '../Lottery/firstAsk';


class CoinToss extends Component {
  state = {
    isHead: true,
    totalScore: 0,
    totalHeads: 0,
    totalTails: 0,
    showTossButton: true,
    tossResult: " ",
    showResult: false,
    balance: 240,
    selectedOption: " ",
    notSelectedOption: " ",
    link: " ",
  }

  onClickTossCoin = () => {

    if(this.state.selectedOption === " ")
    {

    }
    else{
    this.state.showResult = true;
    
    if (this.state.totalScore === 2 || this.state.totalScore === 5 || this.state.totalScore === 7) {

      this.setState((prevState, props) => {
        const val = prevState.selectedOption === 'heads' ? true : false;
        return {
          totalScore: prevState.totalScore + 1,
          isHead: val,
          balance: prevState.balance + 40,
          tossResult: "Win",
          link: 'https://i.pinimg.com/564x/5e/14/d1/5e14d1602ea633f3a7748b9a8b315799.jpg'
        };
      });

      console.log("Hello",this.isHead);


    } else {
    //   this.setState(prevState => ({
    //     isHead: false,
    //     totalScore: prevState.totalScore + 1,
    //     totalTails: prevState.totalTails + 1,
    //     balance: prevState.balance - 40,
    //   }))

    this.setState((prevState, props) => {
        const val = prevState.selectedOption === 'heads' ? false : true;
        return {
          totalScore: prevState.totalScore + 1,
          balance: prevState.balance - 40,
          isHead: val,
          tossResult: "Loss",
          link: 'https://cdn2.iconfinder.com/data/icons/happer-emojis/200/defeated-1024.png'

        };
      });

      
    }
    if(this.state.totalScore === 9)
    { 
        this.state.showTossButton = false;
    }
}
  }

  onClickLottery = () => {
    
  }

  handleOptionChange = (changeEvent) => {
    this.setState({
        selectedOption: changeEvent.target.value
      });

    if(changeEvent.target.value === 'heads'){
        this.setState({
            notSelectedOption : 'tails'
        })
    }
    else{
        this.setState( {notSelectedOption: 'heads'})
    }
  }


  render() {
    const {isHead, totalScore, totalHeads, totalTails, tossResult} = this.state
    const srcImage = isHead
      ? 'https://i.ebayimg.com/images/g/-C4AAOSwZtphg-Ul/s-l500.jpg'
      : 'https://i.etsystatic.com/10624150/r/il/cf2028/4632879513/il_1588xN.4632879513_t8ev.jpg'

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <div className="header-container">
            <h3 className="game-heading">Coin Toss Game</h3>
            <h2> Balance : {this.state.balance} </h2>
           
          </div>
          <div className="image-container">
            <img
              src={srcImage}
              alt="toss result"
              className="heads-tails-image"
            />
          </div>
          <div className="toss-coin-button-container">
          {this.state.showTossButton ? (
            <form id="coinForm">
            
                <input type="radio" name="call" value="heads" checked={this.state.selectedOption === 'heads'} onChange={this.handleOptionChange} /> <label> Heads  </label> 
            
                <input type="radio" name="call" value="tails" checked={this.state.selectedOption === 'tails'} onChange={this.handleOptionChange} /> <label> Tails </label>
            <br></br>
            <button
              className="toss-coin-button"
              type="button"
              onClick={this.onClickTossCoin}
            >
              सिक्का उछालो
            </button>
        </form>
              
      ) : (
        <div>
        <Link to="/lottery1">
       <button
              className="toss-coin-button"
              type="button"
              onClick={this.onClickLottery}
            >
              आगे बढ़ो
            </button>
      </Link>


      </div>
             
      )} 
          </div>

          <div className="toss-coin-button-container"> 
          {this.state.showResult ? (
            <div>
          
          <img
              src={this.state.link}
              alt="toss result"
              className="emoji-image"
            />
          </div>

          ) : (<p></p>)} </div>
            <div className="total-score-container">
              <p className="score-status">Total: {totalScore}</p>
            </div>
           
          
        </div>
      </div>
    )
  }
}

export default CoinToss
