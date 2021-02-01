import React from "react";
import Card from "./Card";
import "./dashboard.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div>dashboard</div>
        <div className="cards">
          <div className="card">
           <Card
            title="子犬"
            description="子犬の説明"
            imgUrl="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          </div>
          {/* <Card
            title="不明"
            description="description"
            imgUrl="https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg"
          /> */}
          <div className="card">
          <Card
            title="レトリーバー"
            description="レトリーバーの説明"
            imgUrl="https://thecatandthedog.com/wp-content/uploads/2020/11/105992231-1561667465295gettyimages-521697453.jpeg"
          />
          </div>
          <div className="card">
          <Card
            title="パグ"
            description="パグの説明"
            imgUrl="https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg"
          /></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
