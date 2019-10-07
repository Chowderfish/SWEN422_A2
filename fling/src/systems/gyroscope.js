import {Accelerometer} from "expo-sensors";

    const accelerometerData = 0;


  _slow = () => {
    Accelerometer.setUpdateInterval(1000);
  };

  _fast = () => {
    Accelerometer.setUpdateInterval(16);
  };

  _subscribe = () => {
    this._subscription = Accelerometer.addListener((result) => {
      accelerometerDataX = result.x * -1;
      accelerometerDataY = result.y;
    });
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };



  tilt = (dispatch) => {
    _subscribe();
    let move_vector = {
        x: this.accelerometerDataX,
        y: this.accelerometerDataY
    };

    console.log(this.accelerometerDataX);

    dispatch({type: "tilt", vector: move_vector});
  }





export default (entities, { dispatch }) => {
    tilt(dispatch);
    return entities;
}
