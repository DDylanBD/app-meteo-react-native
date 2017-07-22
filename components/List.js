import React from 'react';
import {Text, ActivityIndicator, ListView, Image} from 'react-native';
import style from '../style/Style';
import Row from './weather/Row';
import axios from 'axios';

export default class List extends React.Component {

  static navigationOptions = ({navigation}) => {
    return {
      title: `Météo / ${navigation.state.params.city}`,
      tabBarIcon: () => {
        return <Image source ={require('./icons/house-outline.png')}/>
      }
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      city:this.props.navigation.state.params.city,
      report: null
    }
    setTimeout(() => {
      this.fetchWeather()
    }, 1000)
  }

  fetchWeather() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=10&APPID=7cfca9ac57dbb9c1533d32c8c077790d`)
    .then((response) => {
      this.setState({report: response.data})
    })
  }

  render() {
    if (this.state.report === null) {
      return (
        <ActivityIndicator color={style.color} size="large"/>
      )
    } else {
       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      return (
 <ListView dataSource={ds.cloneWithRows(this.state.report.list)} renderRow={(row, j, k) => <Row day={row} index={parseInt(k, 10)}/>} />
      )
    }
  }
}
