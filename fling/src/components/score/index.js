import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";

export default class Renderer extends Component {
    render() {
      console.log(this.props);
        return (
          <Text
            style={styles.titleText} 
          >
            {this.props.score}
          </Text>
        );
    }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
  },
});
