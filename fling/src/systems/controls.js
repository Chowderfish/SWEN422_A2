import {
    find,
    filter,
    any,
    truthy,
    base,
    top,
    distance
} from "../utils";
import {
    standing
} from "../utils/platforms";

export default (entities, { events }) => {
    let player = entities.player;
    let platforms = filter(entities, "platform");

    let swipe = events.find(e => e.type === "swipe");

    let grounded = find(platforms, p => standing(p, player));

    let gyro = events.find(e => e.type === "tilt");

    let falling = find(platforms, p => !standing(p,player));

    player.controls.gestures = {
        swipe,
        gyro
    };

    let modes = [
                {
            if: grounded && swipe,
            then: () => {
                player.controls.mode = "platform";
                if (swipe.vector.y < 0) {
                    if (swipe.vector.x > 0) {
                        player.direction.horizontal = "right";
                    } else if (swipe.vector.x < 0) {
                        player.direction.horizontal = "left";
                    }
                    player.direction.vertical = "up";
                    player.body.force = swipe.vector;
                }
                player.controls.gestures = {};
            }
        },
        {
            if: falling && gyro,
            then: () => {
                let {vector} = gyro;
                if (vector.x === undefined || vector.y === undefined);
                else {
                  player.controls.mode = "falling";
                  if (vector.x > 0) {
                      player.direction.horizontal = "right";
                  } else if (vector.x < 0) {
                      player.direction.horizontal = "left";
                  }
                  vector.x = -vector.x; //Inverts it
                  player.body.force = vector;
                  player.controls.gestures = {};
              }
            }
        },
        {
            if: true,
            then: () => { }
        }
    ];

    modes.find(x => x.if).then();

    return entities;
};
