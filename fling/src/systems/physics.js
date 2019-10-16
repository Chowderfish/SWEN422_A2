import Matter from "matter-js";
import { filter, base, shift, remove } from "../utils";
import { aboveTopEdge } from "../utils/platforms";
import { collisionCategories } from "../utils/constants";

const removeEntitiesThatHaveFallenTooFar = entities => {
    let world = entities.physics.world;
    let removals = Object.keys(entities).filter(
        key =>
            key != "player" &&
            entities[key].body &&
            entities[key].body.position.y > 1000
    );

    removals.forEach(key => {
        remove(key, entities);
    });

    return entities;
};

const checkIfPlayerHasFallenOff = (entities, dispatch) => {
    let {camera, player, score} = entities;

    if (player.posY+200 < camera.offsetY) {
        Matter.Sleeping.set(player.body, true);
        player.action = "idling";
        dispatch({ type: "game-over", score: score.score });
    }

    return entities;
};

let count = 0;
const updatePlatformCollisionFilters = entities => {
    let player = entities.player;
    let platforms = filter(entities, "platform");
    let active = filter(platforms, p => aboveTopEdge(p, shift(base(player), 0, -2)));
    let inactive = filter(platforms, p => !aboveTopEdge(p, shift(base(player), 0, -2)));

    active.forEach(x => {
        x.body.collisionFilter.mask = collisionCategories.player;
    });
    inactive.forEach(x => {
        x.body.collisionFilter.mask = 0;
    });

    return entities;
};

const updatePhysicsEngine = (entities, time) => {
    let engine = entities.physics.engine;
    Matter.Engine.update(engine, time.delta);
};

const setPlayerUpright = entities => {
    let player = entities.player;
    Matter.Body.setAngle(player.body, 0);
};

export default (entities, { time, dispatch }) => {
    removeEntitiesThatHaveFallenTooFar(entities);
    checkIfPlayerHasFallenOff(entities, dispatch);
    updatePlatformCollisionFilters(entities);
    updatePhysicsEngine(entities, time);
    setPlayerUpright(entities);

    return entities;
};
