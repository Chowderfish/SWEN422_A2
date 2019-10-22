import React, { PureComponent } from "react";
import {changeInput} from '../systems/input';
import {changeGyro} from "../systems/gyroscope";
import {changeJump} from "../systems/controls";
import {
    ScrollView,
    Button,
    StyleSheet,
    Switch,
    Text,
    Image,
    View
} from "react-native";

const modes = ['slingshot', 'fling'];

export default class MainMenu extends PureComponent {

    state = {controlValue: false, gyro: true, jump: false};

    toggleCSwitch = (value) => {
        this.setState({controlValue: value});
        changeInput(modes[value * 1]);
    };

    toggleGSwitch = (value) => {
        this.setState({gyro: value});
        changeGyro(value);
    };

    toggleJumpSwitch = (value) => {
        this.setState({jump: value});
        changeJump(value);
    };

    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >

                <Text style ={styles.title}>Fling</Text>
                <Image
                    style={{width: 50, height: 50}}
                    source={require('../components/player/player-jumping.png')}
                />

                <View style={styles.button}>
                    <Button  onPress={this.props.onPlayGame} title="Play Game">Play</Button>
                </View>

                <Switch
                    style={{marginTop:30}}
                    onValueChange = {this.toggleCSwitch}
                    value = {this.state.controlValue}
                />
                <Text>Control Mode: {this.state.controlValue ? 'Fling' : 'Slingshot'}</Text>

                <Switch
                    style={{marginTop:30}}
                    onValueChange = {this.toggleGSwitch}
                    value = {this.state.gyro}
                />
                <Text>Control Mode: {this.state.gyro ? 'Gyro ON' : 'Gyro OFF'}</Text>

                <Switch
                    style={{marginTop:30}}
                    onValueChange = {this.toggleJumpSwitch}
                    value = {this.state.jump}
                />
                <Text>Auto Jump: {this.state.jump ? 'ON' : 'OFF'}</Text>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
    contentContainer: {
        flex: 1,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 70,
    },
    button: {
        margin: 20
    }
});
