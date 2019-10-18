import { any } from "../utils";

let verbose = false; //Exposes touch events to console for debugging

const inputModes = ["fling", "slingshot"];
let inputMode = "slingshot";

let swipeStarted;
let swipeEnded;
let lastMoveEvent;

const swipe = (touches, dispatch) => {
    let move = touches.find(x => (x.type === "move" || x.type === "long-press"));
    let fingerUp = any(touches, "type", "end");
    let fingerDown = any(touches, "type", ["long-press", "move"]);

    if (move) {
        if (verbose) {
            console.log("Touch move event found");
            if (swipeStarted === undefined) console.log("No swipe start event registered");
            if (swipeEnded === undefined) console.log("No swipe end event registered");
        }
        lastMoveEvent = move;
    }

    if (lastMoveEvent) {
        if (swipeStarted) {
            if (fingerUp || !fingerDown) {
                if (verbose) {
                    console.log("Finger up event found");
                    console.log("Touch move event registered as swipe end");
                }
                swipeEnded = { x: lastMoveEvent.event.locationX, y: lastMoveEvent.event.locationY };
            }
        } else {
            if (verbose) {
                console.log("Touch move event registered as swipe start");
            }
            swipeStarted = { x: lastMoveEvent.event.locationX, y: lastMoveEvent.event.locationY };
        }

        if(swipeStarted && lastMoveEvent){
            let aim_vector = { startX: swipeStarted.x, startY: swipeStarted.y, endX: lastMoveEvent.event.locationX, endY:  lastMoveEvent.event.locationY};
            dispatch({ type: "aim", aim_vector: aim_vector });
        }

        if (swipeEnded) {
            let deltaX = (swipeEnded.x - swipeStarted.x) / 5;
            let deltaY = (swipeEnded.y - swipeStarted.y) / 4;

            if (verbose) {
                console.log("Dispatching swipe event");
                console.log("dX = " + deltaX + " dY = " + deltaY);
            }

            let move_vector;
            if (inputMode === inputModes[0]) {
                move_vector = { x: deltaX, y: deltaY };
            } else if (inputMode === inputModes[1]) {
                move_vector = { x: (0-deltaX), y: (0-deltaY) };
            } else {
                Error("Unrecognised input mode found : input.js:61");
            }

            swipeStarted = undefined;
            swipeEnded = undefined;
            lastMoveEvent = undefined;

            dispatch({ type: "swipe", vector: move_vector });
        }
    }

};


export default (entities, { touches, events, dispatch }) => {
    swipe(touches, dispatch);
    
    return entities;
};
