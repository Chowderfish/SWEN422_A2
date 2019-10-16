import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import Svg, {Text} from "react-native-svg";
import {round} from "lodash/math";
import {Dimensions} from "react-native";

export default class Renderer extends Component {
    render() {
        let screenWidth = Math.round(Dimensions.get('window').width);
        let screenHeight = Math.round(Dimensions.get('window').height);
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
