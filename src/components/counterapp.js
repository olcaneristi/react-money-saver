import React from "react"
import logo from "../source.gif"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 5
    })
  }

  decrement() {
    this.setState({
      count: this.state.count - 5
    })
  }

  reset() {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div className="container">
        <h1>
          You've saved: <span className="earn">${this.state.count}</span>
        </h1>
        <div className="btn-container">
          <div>
            <button className="inc" onClick={(e) => this.increment(e)}>
              Save $5
            </button>
          </div>
          <div>
            <button className="dec" onClick={(e) => this.decrement(e)}>
              Lose $5
            </button>
          </div>
          <div>
            <button className="res" onClick={(e) => this.reset(e)}>
              Reset All
            </button>
          </div>
        </div>
        <div className="gif">
          <img src={logo} alt="money lover" />
        </div>
      </div>
    )
  }
}

export default Counter
