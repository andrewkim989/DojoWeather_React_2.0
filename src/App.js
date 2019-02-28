import React, { Component } from 'react';
import './App.css';
import "react-router";
import {BrowserRouter, Route, NavLink, Redirect, Switch} from "react-router-dom";
import {City} from "./city.js";

class App extends Component {
  render() {
    return (
      <div className = "App">
        <BrowserRouter>
          <div>
            <div id = "top">
              <h1>Dojo Weather Forecast</h1>
              <NavLink to = "/seattle" activeClassName = "here">Seattle, WA</NavLink> | 
              <NavLink to = "/sanjose" activeClassName = "here">San Jose, CA</NavLink> | 
              <NavLink to = "/burbank" activeClassName = "here">Burbank, CA</NavLink> |
              <NavLink to = "/dallas" activeClassName = "here">Dallas, TX</NavLink> | 
              <NavLink to = "/dc" activeClassName = "here">Washington, D.C.</NavLink> |
              <NavLink to = "/chicago" activeClassName = "here">Chicago, IL</NavLink>
            </div>
            <div id = "main">
              <Switch>
                <Redirect exact from = "/" to = "/sanjose" />
              </Switch>

              <Route path = "/sanjose" render = {(props) => (<City {...props} 
                city = "san%20jose,ca,usa" cityid = "sanjose" cityfull = "San Jose, CA"
                image = "http://www.artfixdaily.com/images/pr/Apr11_sanjose972x410.jpg"/>)}/>

              <Route path = "/seattle" render = {(props) => (<City {...props} 
                city = "seattle,wa,usa" cityid = "seattle" cityfull = "Seattle, WA"
                image = "https://images.pexels.com/photos/656195/pexels-photo-656195.jpeg"/>)}/>

              <Route path = "/burbank" render = {(props) => (<City {...props} 
                city = "burbank,ca,usa" cityid = "burbank" cityfull = "Burbank, CA"
                image = "https://s.abcnews.com/images/Travel/CB_burbank_california_jef_130701_33x16_992.jpg"/>)}/>
              
              <Route path = "/dallas" render = {(props) => (<City {...props} 
                city = "dallas,tx,usa" cityid = "dallas" cityfull = "Dallas, TX"
                image = "https://community-wealth.org/sites/clone.community-wealth.org/files/Dallas%202.jpg"/>)}/>
            
              <Route path = "/dc" render = {(props) => (<City {...props} 
                city = "washington,dc,usa" cityid = "dc" cityfull = "Washington, DC"
                image = "https://cdn.aarp.net/content/dam/aarp/travel/destination-guides/2018/03/1140-trv-dst-dc-main.imgcache.revd66f01d4a19adcecdb09fdacd4471fa8.web.jpg"/>)}/>
            
              <Route path = "/chicago" render = {(props) => (<City {...props} 
                city = "chicago,il,usa" cityid = "chicago" cityfull = "Chicago, IL"
                image = "http://www.doneriterecovery.com/images/chicago.jpg"/>)}/>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
