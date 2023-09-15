// Write your code here.
import './index.css'

import {Component} from 'react'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onEnteredData = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="bg-container">
        <div className="heading-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div>
            <label htmlFor="inputEl" className="para">
              Enter the phrase
            </label>
            <br />
            <input
              id="inputEl"
              type="text"
              placeholder="Enter the phrase"
              className="input-search form-control"
              onChange={this.onEnteredData}
            />
          </div>
          <p className="letter-count">No.of letters: {inputPhrase.length}</p>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
