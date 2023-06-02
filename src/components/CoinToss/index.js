// Write your code here
import {Component} from 'react'

import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {imageUrl: HEADS_IMG_URL, heads: 0, tails: 0}

  onClickToss = () => {
    const {heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let resultImage = ''
    let newHeadCount = heads
    let newTailsCount = tails
    if (tossResult === 0) {
      resultImage = HEADS_IMG_URL
      newHeadCount += 1
    } else {
      resultImage = TAILS_IMG_URL
      newTailsCount += 1
    }
    this.setState({
      imageUrl: resultImage,
      heads: newHeadCount,
      tails: newTailsCount,
    })
  }

  render() {
    const {imageUrl, heads, tails} = this.state
    const totalCount = heads + tails
    return (
      <div className="coin-toss-app-container">
        <div className="content-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="result-image" />
          <button type="button" className="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="result-container">
            <p className="result">Total: {totalCount}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
