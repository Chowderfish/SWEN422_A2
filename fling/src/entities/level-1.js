import React from 'react';
import { Dimensions } from "react-native";
import Matter from "matter-js";
import Platform from "../components/platform";
import Player from "../components/player";
import ScoreRender from '../components/score';
import AimRender from '../components/aim';

Matter.Common.isElement = () => false;

const { width, height } = Dimensions.get("window");
const scale = Math.min(width, 430) / 375;
const cx = width / 2;
const cy = height / 2;
const offsetY = 0;
const platformWidth = Math.min(width, 430);
const platformHeight = 10;

export default restart => {
    //-- Cleanup existing entities..
    if (restart) Matter.Engine.clear(restart.physics.engine);

    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;
    world.gravity = { x: 0, y: 2 };

    let bottom = offsetY+600;
    let layers = [ //List of all possible layers. The ascii representation can be seen next to it
        {platforms:[{disposition: 0, width: 0.25}]}, //                                         |  -  |
        {platforms:[{disposition: 130, width: 0.25}]}, //                                       |    -|
        {platforms:[{disposition: -130, width: 0.25}]} //                                       |-    |
        //{platforms:[{disposition: -130, width: 0.25}, {disposition: 130, width: 0.20}]},//    |-   -|
    ];

    var gap = -100; //The gap between each layer
    let layer = [];
    for(let i = 0; i < 20; i++) {
        let random_layer = layers[Math.floor(Math.random() * layers.length)];
        let plat = Platform(// Just the one platform for now
            world,
            {x: cx + random_layer.platforms[0].disposition, y: bottom + ((i+1)*gap)},
            0,
            platformWidth * random_layer.platforms[0].width,
            platformHeight,
        );
        layer[i] = plat;
    }

    return {
        physics: { engine: engine, world: world },
        platform1: Platform( //Bottom floor
            world,
            { x: cx, y: bottom },
            0,
            width-150,
            20,
        ),
        platform2: Platform( //Right wall. This needs bouncy mechanic
            world,
            { x: width, y: bottom},
            1.5708,
            platformWidth * 10,
            platformHeight,
        ),
        platform3: Platform( //Left wall. This also needs bouncy mechanic
            world,
            { x: 0, y: bottom},
            1.5708,
            platformWidth * 10,
            platformHeight,
        ),

        platform4: layer[0], //TODO this throws an error, look here
        platform5: layer[1],
        platform6: layer[2],
        platform7: layer[3],
        platform8: layer[4],
        platform9: layer[5],
        platform10: layer[6],
        platform11: layer[7],
        platform12: layer[8],
        platform13: layer[9],
        platform14: layer[10],
        platform15: layer[11],
        platform16: layer[12],
        platform17: layer[13],
        platform18: layer[14],
        platform19: layer[15],
        platform20: layer[16],

        player: Player(world, { x: cx, y: offsetY + 400  }),

        camera: { offsetY: 0 },
        score: {score: 0, renderer: <ScoreRender />},
        aim: {renderer: <AimRender />},
    };
};
