import React from "react"
import axios from "axios";

class Dogs extends React.Component {
    state ={
        photo: "",
    };
　  //ライフサイクルメソッド　-> requestを送るための
　　//必須ではない
    componentDidMount() { //renderの前
    //urlにリクエストを送る
    axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
        console.log(response.data.message);
        // state = response.data.message これはだめ
        this.setState({
            photo: response.data.message,
        })
    });
    //帰ってきた情報を表示できる形にする
    }
  render(){
      return(
          <div>
              <img src={this.state.photo} alt="dog" />
              <button 
              onClick={() => {
              axios
              .get("https://dog.ceo/api/breeds/image/random")
              .then (response => {
                 this.setState({
                     photo: response.data.message
                 })
                })
            }}
            >クリックして更新
            </button>
          </div>
      );
  }
}

export default Dogs;