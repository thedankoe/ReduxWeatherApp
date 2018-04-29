import React, {Component} from 'react';
import {connect} from 'react-redux';

export class WeatherList extends Component {
    render() {
        return (
            <table className="tabel table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}) {
    return {weather}; //{weather} === {weather: weather} es6
}

export default connect(mapStateToProps)(WeatherList);