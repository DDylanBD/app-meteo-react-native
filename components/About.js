import React from 'react';
import style from '../style/Style';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

export default class About extends React.Component {

  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source ={require('./icons/man-user.png')}/>
    }
  }

  search() {
    this.props.navigation.navigate('Search');
  }

  render() {
    return (
      <View style={style.container}>
        <Text style={style.title}>A propo de l'application</Text>

        <Button color={style.color} onPress={() => this.search()} title='Recherche une ville'/>
      </View>
    )
  }
}
