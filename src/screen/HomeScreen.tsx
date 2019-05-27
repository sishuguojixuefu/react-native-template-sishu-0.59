import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Image source={require('~/images/home.png')} />
      </View>
    )
  }
}
