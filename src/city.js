import React, { Component } from 'react';
import './App.css';

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ""
        };
    }
  
    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + this.props.city 
          + "&appid=72ea2b1e50747afd827171f5a46d6b15")
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.message) {
                        this.setState({data: result.message});
                    }
                    else {
                        this.setState({data: result});
                    }
                },
                (error) => {
                    this.setState({data: "Bad request"});
                }
            )
    }
  
    render() {
        if (this.state.data) {
            var humidity = this.state.data.main.humidity;
            var temp = (((9/5) * (this.state.data.main.temp - 273.15)) + 32).toFixed(2);
            var high = (((9/5) * (this.state.data.main.temp_max - 273.15)) + 32).toFixed(2);
            var low = (((9/5) * (this.state.data.main.temp_min - 273.15)) + 32).toFixed(2);
            var status = this.state.data.weather[0].main;
  
            return (
                <div id = {this.props.cityid}>
                    <h1>{this.props.cityfull}</h1>
                    <div id = "info">
                        <p>Humidity: {humidity} </p>
                        <p>Temperature (Average): {temp} °F </p>
                        <p>Temperature (High): {high} °F</p>
                        <p>Temperature (low): {low} °F</p>
                        <p>Status: {status} </p>
                    </div>
                    <img src = {this.props.image} 
                      alt = {this.props.cityfull}></img>
                </div>
            )
        }
        else {
          return (
            <div id = "loading">
              <h1>Loading...</h1>
            </div>
          )
        }
    }
}

export {City}