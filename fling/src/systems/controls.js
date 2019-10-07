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

    player.controls.gestures = {
        swipe,
        gyro
    };

    let modes = [
        {
            if: grounded && swipe,
            then: () => {
                player.controls.mode = "platform";
                if (swipe.vector.x > 0) {
                    player.direction.horizontal = "right";
                } else if (swipe.vector.x < 0) {
                    player.direction.horizontal = "left";
                }
                if (swipe.vector.y > 0) {
                    player.direction.vertical = "down";
                } else if (swipe.vector.y < 0) {
                    player.direction.vertical = "up"
                }
                player.body.force = swipe.vector;
                player.controls.gestures = {};
            }
        },
        {
            if: grounded && gyro,
            then: () => {
                player.controls.mode = "platform";
                player.direction.horizontal = "up";
                player.body.force = gyro.vector;
                player.controls.gestures = {};
            }
        },
        {
            if: true,
            then: () => {}
        }
    ];

    modes.find(x => x.if).then();

    return entities;
};
