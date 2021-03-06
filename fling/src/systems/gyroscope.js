import {Accelerometer} from "expo-sensors";
import {Platform} from "react-native";

let gyro = true;

export const changeGyro = (mode) => {
  gyro = mode;
};

const accelerometerData = 0;

_slow = () => {
  Accelerometer.setUpdateInterval(1000);
};

_fast = () => {
  Accelerometer.setUpdateInterval(16);
};

_subscribe = () => {
  this._subscription = Accelerometer.addListener((result) => {
    let {x, y} = result;
    if (x == NaN || y == NaN) ;
    else {
      accelerometerDataX = Platform.OS === 'ios' ? x * -2.5 : x * 2.5;
      accelerometerDataY = y;
    }
  });
};

_unsubscribe = () => {
  this._subscription && this._subscription.remove();
  this._subscription = null;
};



tilt = (dispatch) => {
  _subscribe();
  _fast();
  let move_vector = {
      x: this.accelerometerDataX,
      y: this.accelerometerDataY
  };

  if(gyro){
    dispatch({type: "tilt", vector: move_vector});
  }

};





export default (entities, { dispatch }) => {
    tilt(dispatch);
    return entities;
}
