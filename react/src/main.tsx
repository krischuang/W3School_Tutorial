import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'


class Car extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          <h1>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </h1>
        </p>
        <button
          type="button"
          onClick={this.changeColor}
          >Change color</button>
      </div>
    )
  }
}
createRoot(document.getElementById('sandy')!).render(
  <Car model="Mustang"/>
)
