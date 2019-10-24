import React, { PureComponent } from "react";
import { Table, Rows, Row } from 'react-native-table-component';
import {
    TextInput,
    ScrollView,
    Button,
    StyleSheet,
    Dimensions
} from "react-native";
import * as _ from 'lodash';

export default class GameOver extends PureComponent {
  state = {
    username: 'Jacob'
  };
    render() {
        let {username} = this.state;
      let onChange = text => this.setState({username: text});
        let {score, scoreBoard, updateScoreBoard } = this.props;
        scoreBoard = scoreBoard.map(({name, score}) => [name, ''+score]);
        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);
        const cellWidth = screenWidth*.7/2;
        return (
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
            >

              <TextInput onChangeText={text => onChange(text)} value={username}/> 
                <Button onPress={
                  () => {
                    scoreBoard = scoreBoard.concat([[username, score]]);
                    scoreBoard = scoreBoard.map(([name, score]) => ({name, score}));
                    scoreBoard = _.reverse(_.sortBy(scoreBoard, 'score'));
                    console.log(scoreBoard);
                    //
                    updateScoreBoard(scoreBoard);
                  }
                } title='submit score'> Submit Score </Button>

                <Button onPress={this.props.onPlayAgain} title="Play Again?">Play Again</Button>

                <Button title="Main Menu">Main Menu</Button>

                  <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Row key={-1} data={['USERNAME', 'SCORE']} widthArr={[cellWidth, cellWidth]}
                        />
                    {
                    scoreBoard.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={[cellWidth, cellWidth]}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
                  </Table>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center"
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { alignContent: 'center' }
});
