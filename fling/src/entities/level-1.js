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
        {platforms:[{disposition: 0, width: 0.25}]}, //                                     |  -  |
        {platforms:[{disposition: 50, width: 0.25}]}, //                                    |    -|
        {platforms:[{disposition: -50, width: 0.25}]}, //                                   |-    |
        {platforms:[{disposition: -50, width: 0.20}, {disposition: 50, width: 0.20}]},//    |-   -| Use this later
    ];

    var gap = 100; //The gap between each layer
    let layer = [];
    for(var i = 0; i < 10; i++) {
        var random_layer = layers[Math.floor(Math.random() * layers.length)];
        var plat = Platform(// Just the one platform for now
            world,
            {x: cx + random_layer.platforms[0].disposition, t: bottom + ((i+1)*gap)},
            0,
            platformWidth * random_layer.platforms[0].width
        );
        layer[i] = plat;
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

        platform4: layer[0],
        //platform5: layer[1],


        player: Player(world, { x: cx, y: offsetY + 400  }),

        camera: { offsetY: 0 }
    };
};
