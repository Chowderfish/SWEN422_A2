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

    let swipeUp = any(events, "type", "swipe-up");
    let swipeDown = any(events, "type", "swipe-down");
    let swipeLeft = any(events, "type", "swipe-left");
    let swipeRight = any(events, "type", "swipe-right");
    let tap = any(events, "type", "tap");
    let hold = any(events, "type", "hold");

    let grounded = find(platforms, p => standing(p, player));

    player.controls.gestures = {
        swipeUp,
        swipeDown,
        swipeLeft,
        swipeRight,
        tap,
        hold
    };

    let modes = [
        {
            if: grounded && swipeLeft,
            then: () => {
                player.controls.mode = "platform";
                player.direction.horizontal = "left";
                player.controls.gestures = {};
            }
        },
        {
            if: grounded && swipeRight,
            then: () => {
                player.controls.mode = "platform";
                player.direction.horizontal = "right";
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
