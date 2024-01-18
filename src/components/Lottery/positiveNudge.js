
import {Component} from "react";
import ReactPlayer from "react-player";

import '../CoinToss/coinToss.css'

class Positive extends Component {
  state = {
    disabled: true,
    text: " ",
    lotteryText: " ",
  }

  onClickYes = () => {
    this.setState((prevState, props) => {
        return {
          disabled: false,
          lotteryText: "Sorry! आपने लॉटरी नहीं जीती. खेल खत्म!",
          text: 'Yes'
        };
      });

  }

  onClickNo = () => {
    this.setState((prevState, props) => {
        return {
          disabled: false,
          lotteryText: "खेल खत्म! भागीदारी के लिए धन्यवाद",
          text: 'No'
        };
      });
    
  }




  render() {
    const {isHead, totalScore, totalHeads, totalTails, tossResult} = this.state

    return (
      <div className="app-container">
        {this.state.disabled ? (
        <div className="nudge-container">
          
          <div className="youtube-video">
          <ReactPlayer
                    url="https://youtu.be/RNs4xcXt6HQ"
                    playing="true"
                    controls="false"
                  />

                  </div>
          
          <div className="header-container">
            <h5 className="nudge-text">आपके साथ भी ऐसा हो सकता है! क्या आप लॉटरी खेलना चाहते हैं?</h5>
          </div>
        <div>
          <button
              className="toss-coin-button"
              type="button"
              onClick={this.onClickYes}
            >
              हाँ
            </button>
            &nbsp;
            <button
              className="toss-coin-button"
              type="button"
              onClick={this.onClickNo}
            >
              नहीं
            </button>
            </div> </div>) : (<div><h1>{this.state.lotteryText}</h1>
            <p>No, {this.state.text}</p>
            </div>)}
      
          </div>
      
    )
  }
}

export default Positive
