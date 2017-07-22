import React from 'react';
import style from '../style/Style';
import {View, TextInput, Image, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import List from './List';
class Search extends React.Component {

  static navigationOptions = {
    title: 'Rechercher une ville',
    tabBarIcon: () => {
      return <Image source ={require('./icons/house-outline.png')}/>
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      city: 'Paris'
    }
  }
  setCity(city) {
    this.setState({city: city})
  }

  submit() {
    this.props.navigation.navigate('Result', {city: this.state.city})
  }

  render() {
    return (
      <View style={style.container}>
        <TextInput underlineColorAndroid='transparent' onChangeText={(text) => this.setCity(text)} onSubmitEditing={() => this.submit()} style={style.input} value={this.state.city}/>
        <Button color={style.color} onPress={() => this.submit()} title='Recherche'/>
      </View>
    )
  }
}

const navigationOptions = {
  headerStyle: style.header,
  headerTitleStyle: style.headerTitle
}

export default StackNavigator({
  Search: {
    screen: Search,
    navigationOptions
  },
  Result: {
    screen: List,
    navigationOptions
  }
})
