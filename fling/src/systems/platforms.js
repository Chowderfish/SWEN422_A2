import Matter from "matter-js";
import { interpolateBasis } from "d3-interpolate";
import { find, filter, any } from "../utils";
import { standing } from "../utils/platforms";
import { collisionCategories } from "../utils/constants";

const jump = player => {
    return {
        args: {
            direction: player.direction.horizontal,
            walking: player.action === "walking",
            interpolateX: interpolateBasis([2, 2, 3, 4, 2, 2, 1]),
            interpolateY: interpolateBasis([3, 3, 4, 6, 2, -2, -1, -1, -1, -1])
        },
        duration: 700,
        animate(
            _,
            percent,
            { walking, direction, interpolateX, interpolateY }
        ) {
            player.action = "jumping";
            let forceX = walking
                ? interpolateX(percent) * (direction === "right" ? 1 : -1)
                : 0;
            let forceY = interpolateY(percent);
            Matter.Body.applyForce(player.body, player.body.position, {
                x: forceX,
                y: -forceY
            });
        },
        complete() {
            player.action = "idling";
        }
    };
};

export default (entities, { events }) => {
    let player = entities.player;

    if (player.controls.mode !== "platform") return entities;

    Matter.Sleeping.set(player.body, false);
    player.body.collisionFilter.mask =  collisionCategories.platform;

    let platforms = filter(entities, "platform");
    let gestures = player.controls.gestures;
    let grounded = any(platforms, p => standing(p, player));
    let jumping = player.animations.jump;

    let actions = [
        {
            if: grounded && !jumping && (gestures.tap || gestures.swipeUp),
            then: () => {
                player.animations.jump = jump(player);
            }
        },
        {
            if: grounded && gestures.hold && !jumping,
            then: () => {
                player.action = "walking";
                Matter.Body.applyForce(player.body, player.body.position, {
                    x: player.direction.horizontal === "right" ? 2.5 : -2.5,
                    y: 0
                });
            }
        },

        {
            if: true,
            then: () => {
                player.action = "idling";
            }
        }
    ];

    find(actions, "if").then();

    return entities;
};
