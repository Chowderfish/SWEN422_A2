import React, { PureComponent } from "react";
import { AsyncStorage, StyleSheet, Modal } from "react-native";
import { GameEngine, DefaultTouchProcessor } from "react-native-game-engine";
import CameraRenderer from "./utils/cameraRenderer";
import LevelOne from "./entities/level";
import Systems from "./systems";
import GameOver from "./menus/gameover";
import ScoreRenderer from "./components/score"

export default class Game extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            gameOver: false,
            score: 0,
            scoreBoard: [],
        };
      AsyncStorage.getItem('scores')
        .then(d => {
          if (d === null) {
            AsyncStorage.setItem('scores', '[{"name": "Jacob", "score": 200}]');
          }
          else
            this.setState({scoreBoard: JSON.parse(d)});
        }).catch(_ => this.gameOver());
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({
                running: true
            });
        }
    }

    restart = () => {
        this.refs.engine.swap(LevelOne());

        this.setState({
            running: true,
            gameOver: false,
        });
    };

    quit = () => {
        this.setState({
            running: false,
            gameOver: false,
        });

        if (this.props.onClose) this.props.onClose();
    };

    gameOver = () => {
        this.setState({
            running: false,
            gameOver: true
        });

    };


    handleEvent = ev => {
        switch (ev.type) {
            case 'score-update':
                console.log(ev);
                this.setState({score: ev.value});
                break;
            case "game-over":
                console.log(ev.score);
                this.gameOver();
                break;
        }
    };

    render() {
        let entities = LevelOne();
        return (
            <Modal
                transparent={false}
                animationType="slide"
                visible={this.props.visible}
                onRequestClose={this.quit}
            >
                <GameEngine
                    ref={"engine"}
                    style={styles.game}
                    systems={Systems}
                    entities={entities}
                    renderer={CameraRenderer}
                    touchProcessor={DefaultTouchProcessor({
                        triggerPressEventBefore: 150,
                        triggerLongPressEventAfter: 151
                    })}
                    running={this.state.running}
                    onEvent={this.handleEvent}
                >
                    {this.state.gameOver && (
                        <GameOver scoreBoard={this.state.scoreBoard} updateScoreBoard={this._updateHighScore} onPlayAgain={this.restart} onQuit={this.quit} />
                    )}
                </GameEngine>

                <ScoreRenderer score={this.state.score}/>
            </Modal>
        );
    }

    _updateHighScore = async (scoreBoard) => {
      this.setState({scoreBoard});
      AsyncStorage.setItem('score', JSON.stringify(scoreBoard));
    }
}

const styles = StyleSheet.create({
    game: {
        backgroundColor: 'rgba(0,176,255,0.5)'
    }
});
