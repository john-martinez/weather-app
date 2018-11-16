import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';
import  './style.css';

class App extends Component{
  render(){
    return (
      <div className="ui container grid ">
        <h1 className="ui header white">Five Day City Weather Forecast</h1>
        <div className="ui row segment">
          <SearchBar />
        </div> 
        <div className="ui row segment">
          <WeatherList />
        </div>
      </div>
    );
  }
}

export default App;