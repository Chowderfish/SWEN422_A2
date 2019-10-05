import React, { PureComponent } from "react";
import {
    ScrollView,
    Button,
    StyleSheet,
} from "react-native";

export default class MainMenu extends PureComponent {
    render() {
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >

                <Button onPress={this.props.onPlayGame} title="Play Game">Play</Button>

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
