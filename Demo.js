

import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Demo extends Component {
   
    componentWillUnmount(){
        console.log("component removed")
    }
  render() {
    return (
      <View>
        <Text> {this.props.name} </Text>
      </View>
    )
  }
}
