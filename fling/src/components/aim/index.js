import React, { Component } from "react";
import Svg, {Line} from "react-native-svg";
import {Dimensions } from "react-native";

export default class Renderer extends Component {


    render() {
        let screenWidth = Math.round(Dimensions.get('window').width);
        let screenHeight = Math.round(Dimensions.get('window').height);
        return (
            <Svg height={screenHeight} width={screenWidth}>
                {this.props.aim && (
                    <Line x1={this.props.aim.startX} y1={this.props.aim.startY} x2={this.props.aim.endX} y2={this.props.aim.endY} stroke="red" strokeWidth="2" />
               )}
            </Svg>
        );
    }
}
