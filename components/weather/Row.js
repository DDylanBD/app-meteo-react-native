import React from 'react';

import {View, Text, Image} from 'react-native';
import moment from 'moment';
import styles from '../../style/Style';
// import FadeIn from '../animated/FadeIn';
import 'moment/locale/fr';

moment.locale('fr')

export default class Row extends React.Component {


static propTypes = {
  day : React.PropTypes.object,
  index : React.PropTypes.number
}

icon(size = 50) {
  const type = this.props.day.weather[0].main.toLowerCase()
  let image
  switch(type) {
    case 'clouds':
      image = require('.././icons/cloudy.png')
      break;
    case 'rain':
      image = require('.././icons/rain.png')
      break;
    default:
      image = require('.././icons/sun.png')
  }
  return  <Image source={image} style={{width: size, height: size}}/>
}


day() {
  let day = moment(this.props.day.dt * 1000).format('ddd')
  return (
    <Text style={[styles.white, styles.bold]}>{day.toUpperCase() }</Text>
  )
}
date() {
  let day = moment(this.props.day.dt * 1000).format('DD/MM')
  return (
    <Text>{day}</Text>
  )
}

  render() {
    if(this.props.index ===  0) {
      return(
        <View style={[styles.flex, styles.view, styles.firstView]}>
          <View>
          <Text style={styles.white}>{this.day()} {this.date()}</Text>
            {this.icon(90)}
          </View>
          <Text style={[styles.temp, {fontSize: 35}]}>{Math.round(this.props.day.temp.day)}°C</Text>
        </View>
      )
    }else{
      return(
        <View style={[styles.flex, styles.view]}>
          <View style={styles.flex}>
            {this.icon()}
            <Text style={{marginLeft : 10}}>{this.day()} {this.date()}</Text>
          </View>
        <Text style={styles.temp}>{Math.round(this.props.day.temp.day)}°C</Text>
      </View>
      )
    }
  }
}
