import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWeather } from '../actions'

class SearchBar extends Component {
  state = {city: ""};

  onSubmitForm = (e) =>{
    e.preventDefault();
    this.props.fetchWeather(this.state.city);
    this.setState({city: ''});
  }
  render(){
    return(
        <div className="column sixteen wide">
          <form 
            onSubmit={(e)=>this.onSubmitForm(e)}
            className="ui form column">
            <div className="field">
              <div className="ui action input">
                <input 
                   placeholder="Get a five-day forecast of your favorite city"
                   value={this.state.city}
                   type="text"
                   onChange={(e)=>this.setState({city: e.target.value})} />
                <button className="ui button primary"> Submit </button>
              </div>    
            </div>
          </form>
        </div>
      );
    }
}


export default connect(null, {fetchWeather})(SearchBar);