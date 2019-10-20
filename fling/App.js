import React, { PureComponent } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import MainMenu from "./src/menus/main";
import Game from "./src/game";

export default class Fling extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      gameVisible: false,
        controls: false,
        gyro: false

    };
  }

    changeCon = controls => {
        this.setState({
            controls
        });
    };

    changeGyro = gyro => {
        this.setState({
            gyro
        });
    };

    toggleGame = gameVisible => {
        this.setState({
          gameVisible
        });
    };

  render() {
    return (
        <View style={styles.container}>
          <StatusBar barStyle={"light-content"} hidden={this.state.gameVisible} animated showHideTransition={"slide"} />
          <MainMenu onPlayGame={_ => this.toggleGame(true)} changeCon={this.changeCon} changeGyro={this.changeGyro}/>
          <Game
              visible={this.state.gameVisible}
              onClose={_ => this.toggleGame(false)}
              controls={this.state.controls}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
