export default (currentWeather = [], action) => {
    if (action.type === 'FETCH_WEATHER'){
        return [...currentWeather, action.payload.data];
    }
    return currentWeather;
}