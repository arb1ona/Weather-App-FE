import React, { Component } from 'react'
import './Forcast.css'

class Forcast extends Component {

    oneDay = (dayForcast, i) => {
        const now_temp = (i === 0 ? dayForcast.now_temp : undefined)
        const weather_state_abbr = dayForcast.weather_state_abbr;
        const imageURL = "https://www.metaweather.com/static/img/weather/" + weather_state_abbr + ".svg";

        return (
            <li key={this.props.time + i}>
                <h3>{dayForcast.date_of_forcast}</h3>
                <img src={imageURL} width={150} height={50} alt={"weather icon"} />
                <h4>{dayForcast.weather_state_name}</h4>
                <h4>Max: {dayForcast.max_temp}</h4>
                <h4>Min: {dayForcast.min_temp}</h4>
                {now_temp && (<h4>Now: {now_temp}</h4>)}

            </li>
        )
    }
    render() {
        let forcastDays = this.props.forcastDays;
        return (
            <>
                <div className="city-time">
                    <h1>{this.props.city}</h1><br />
                    <h3>Time: {this.props.time}</h3>
                </div>
                <div className="location-style">
                    <ul>
                        {forcastDays.map((day, index) => this.oneDay(day, index))}
                    </ul>
                </div>
            </>
        )
    }
}

export default Forcast;
