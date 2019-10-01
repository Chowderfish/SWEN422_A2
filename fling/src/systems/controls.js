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

    let swipeUp = events.find(e => e.type === "swipe-up");
    let swipeDown = events.find(e => e.type === "swipe-down");
    let swipeLeft = events.find(e => e.type === "swipe-left");
    let swipeRight = events.find(e => e.type === "swipe-right");
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
                player.body.force = swipeLeft.vector;
                player.controls.gestures = {};
            }
        },
        {
            if: grounded && swipeRight,
            then: () => {
                player.controls.mode = "platform";
                player.direction.horizontal = "right";
                player.body.force = swipeRight.vector;
                player.controls.gestures = {};
            }
        },
        {
            if: grounded && swipeUp,
            then: () => {
                player.controls.mode = "platform";
                player.direction.vertical = "up";
                player.body.force = swipeUp.vector;
                player.controls.gestures = {};
            }
        },
        {
            if: grounded && swipeDown,
            then: () => {
                player.controls.mode = "platform";
                player.direction.vertical = "down";
                player.body.force = swipeDown.vector;
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
