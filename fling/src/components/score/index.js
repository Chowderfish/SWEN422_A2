import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import {round} from "lodash/math";

export default class Renderer extends Component {
    render() {

        return (
          <Text
            style={styles.titleText} 
          >Score: {round(this.props.score / 10000)}
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
