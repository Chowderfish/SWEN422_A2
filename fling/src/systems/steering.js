export default (entities, { events }) => {
    let player = entities.player;
    let { swipeLeft, swipeRight, swipeUp, swipeDown } = player.controls.gestures

    let horizontal = [
        { if: swipeLeft, then: "left" },
        { if: swipeRight, then: "right" },
        { if: true, then: player.direction.horizontal }
    ];

    let vertical = [
        { if: swipeUp, then: "up" },
        { if: swipeDown, then: "down" },
        { if: true, then: player.direction.vertical }
    ];

    player.direction.horizontal = horizontal.find(x => x.if).then;
    player.direction.vertical = vertical.find(x => x.if).then;

    return entities;
};
