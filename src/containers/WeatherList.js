import React from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/GoogleMap';
import Chart from '../components/Chart';



const renderCities = (cityData) => { 
    const city = cityData.city;
    const temps = cityData.list.map(data=>data.main.temp - 273);
    const pressures = cityData.list.map(data=>data.main.pressure);
    const humidities = cityData.list.map(data=>data.main.humidity);
    const { lon, lat } = city.coord;
   return (
        <table className="ui fixed table center aligned" key={city.id}>
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (&deg;C)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
            </thead>
            <tbody>
                <tr key={city.id}>
                    <td><GoogleMap lat={lat} lon={lon} /></td>
                    <td> <Chart color="blue" data={temps} unit={'\u00b0C'} /> </td>
                    <td> <Chart color="red" data={pressures} unit="hPa"  /> </td>
                    <td> <Chart color="green" data={humidities} unit="%"  /> </td>
                </tr>
            </tbody>
        </table>    
   );
}

const WeatherList = (props) => {
    return (
        <div className="column sixteen wide weather-list">
            {props.cities.map(renderCities)}    
        </div>
    );
}

const mapStateToProps = (state) => {
    return {cities: state.cityForecast}
}

export default connect(mapStateToProps)(WeatherList);