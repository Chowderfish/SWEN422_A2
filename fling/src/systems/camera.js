export default (entities, { screen }) => {
    let player = entities.player;
    let camera = entities.camera;
    let anchorY = player.body.position.y;

    let oldPos = camera.offsetY;
    let newPos = -anchorY + 500;

    if(newPos > oldPos){
        camera.offsetY = -anchorY + 500
    }

    player.posY = 570 +  (-player.body.position.y);

    return entities;
}
