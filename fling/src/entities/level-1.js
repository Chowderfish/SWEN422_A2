import React from "react";
import { Dimensions } from "react-native";
import Matter from "matter-js";
import Platform from "../components/platform";
import Player from "../components/player";

Matter.Common.isElement = () => false;

const { width, height } = Dimensions.get("window");
const scale = Math.min(width, 430) / 375;
const cx = width / 2;
const cy = height / 2;
const offsetY = (height - 465) / 2 - 35;
const platformWidth = Math.min(width, 430);

export default restart => {
    //-- Cleanup existing entities..
    if (restart) Matter.Engine.clear(restart.physics.engine);

    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;

    world.gravity = { x: 0, y: 2 };

    return {
        physics: { engine: engine, world: world },

        platform1: Platform(
            world,
            { x: cx-50, y: offsetY + 500  },
            0,
            platformWidth * 0.25
        ),
        platform2: Platform(
            world,
            { x: cx+50, y: offsetY + 350  },
            0,
            platformWidth * 0.25
        ),
        platform3: Platform(
            world,
            { x: cx, y: offsetY + 100  },
            0,
            platformWidth * 0.25
        ),

        player: Player(world, { x: cx, y: offsetY - 100  }),

        camera: { offsetY: 0 }
    };
};
