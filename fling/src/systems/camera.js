export default (entities, { screen }) => {
    let player = entities.player;
    let camera = entities.camera;
    let targetY = 100 + camera.offsetY;
    let anchorY = screen.height * 0.65;
    let diff = anchorY - player.body.position.y - camera.offsetY;

    if (targetY < 150 || diff < 0) {
        camera.offsetY += diff * 0.05;
    }

    return entities;
}
