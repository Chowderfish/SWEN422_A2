import React, { PureComponent } from "react";
import {
    ScrollView,
    Button,
    StyleSheet,
    Switch,
    Text,
} from "react-native";

export default class MainMenu extends PureComponent {

    state = {controlValue: false};

    toggleSwitch = (value) => {
        this.setState({controlValue: value})
        this.props.changeCon(value);
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
