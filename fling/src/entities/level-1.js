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

    let bottom = offsetY+500;
    // plat_1: Platform(
    //     world,
    //     { x: cx-50, y: offsetY + 500  },
    //     0,
    //     platformWidth * 0.25
    // )
    let layers = [ //List of all possible layers. The ascii representation can be seen next to it
        {first: {disposition: 0, width: 0.25}, second: null}, //                                |  -  |
        {first: {disposition: -50, width: 0.20}, second: {disposition: 50, width: 0.20}}//      |-   -|
    ];

    var gap = 100; //The gap between each layer
    let level = [];
    for(var i = 0; i < 10; i++) {
        var random_platform = layers[Math.floor(Math.random() * layers.length).toString()];
        var new_platform = Platform(
            world,
            {x: cx + random_platform.first.disposition, t: bottom + ((i+1)*gap)},
            0,
            platformWidth * random_platform.first.width
        );
        level[i] = new_platform;
    }



    return {
        physics: { engine: engine, world: world },
        platform1: Platform( //Bottom floor
            world,
            { x: cx, y: bottom },
            0,
            platformWidth
        ),
        platform2: Platform( //Right wall. This needs bouncy mechanic
            world,
            { x: width, y: bottom},
            1.5708,
            platformWidth * 10
        ),
        platform3: Platform( //Left wall. This also needs bouncy mechanic
            world,
            { x: 0, y: bottom},
            1.5708,
            platformWidth * 10
        ),


        player: Player(world, { x: cx, y: offsetY + 400  }),

        camera: { offsetY: 0 }
    };
};
