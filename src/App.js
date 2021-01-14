import React from "react";

class Counter extends React.Component {
  state = {
    suuji: 1,
    bairitsu: 1,
    result: 1,
  };

  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <h2>数字</h2>
          <h1>{this.state.suuji}</h1>
          <div>
            <button
              onClick={() => this.setState({ suuji: this.state.suuji + 1 })}
            >
              +
            </button>
            <button
              onClick={() => this.setState({ suuji: this.state.suuji - 1 })}
            >
              -
            </button>
          </div>
        </div>
        <div>
          <h2>倍率</h2>
          <h1>{this.state.bairitsu}</h1>
          <div>
            <button
              onClick={() =>
                this.setState({ bairitsu: this.state.bairitsu + 1 })
              }
            >
              +
            </button>
            <button
              onClick={() =>
                this.setState({ bairitsu: this.state.bairitsu - 1 })
              }
            >
              -
            </button>
          </div>
        </div>
        <div>
          <h2>結果</h2>
          <h1>{this.state.result}</h1>
          <div>
            <button
              onClick={() =>
                this.setState({
                  result: this.state.suuji * this.state.bairitsu,
                })
              }
            >
              かける
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
