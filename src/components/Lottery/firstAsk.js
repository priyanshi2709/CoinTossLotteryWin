// Write your code here

import {Link, Route, Routes} from 'react-router-dom';
import {Component} from "react";
import lotteryImg from "./lotteryImg.jpeg";

import '../CoinToss/coinToss.css'

class LotteryOne extends Component {
  state = {
    
  }

  onClickTossCoin = () => {

  }


  handleOptionChange = (changeEvent) => {
    
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
            <h3 className="game-heading">Lottery Game</h3>
          </div>
          <div className="image-container">
            <img
              src={lotteryImg}
              alt="toss result"
              className='lottery-image'
            />
          </div>
         
          <div>
          <Link to="/negative">
          <button
              className="confirm-button"
              type="button"
              onClick={this.onClickLottery}
            >
              हाँ
            </button> </Link>

            <Link to="/positive">
            <button
              className="confirm-button"
              type="button"
              onClick={this.onClickLottery}
            >
              नहीं
            </button> </Link>
            </div>
         
            </div>
      </div>
    )
  }
}

export default LotteryOne
