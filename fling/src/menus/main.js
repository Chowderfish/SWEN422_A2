import React, { PureComponent } from "react";
import {changeInput} from '../systems/input';
import {
    ScrollView,
    Button,
    StyleSheet,
    Switch,
    Text,
} from "react-native";

const modes = ['Fling', 'Slingshot'];

export default class MainMenu extends PureComponent {

    state = {controlValue: false};

    toggleSwitch = (value) => {
        this.setState({controlValue: value})
        changeInput(modes[value * 1]);
    };

    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >

                <Button onPress={this.props.onPlayGame} title="Play Game">Play</Button>

                <Switch
                    style={{marginTop:30}}
                    onValueChange = {this.toggleSwitch}
                    value = {this.state.controlValue}
                />
                <Text>Control Mode: {this.state.controlValue ? 'Fling' : 'Slingshot'}</Text>

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
    }
});
