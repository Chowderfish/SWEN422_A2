export default (entities) => {
  let {camera} = entities;

  entities.score.score = Math.floor(
    Math.max(entities.score.score,
      Math.abs(camera.offsetY)*1000
    ));

  return entities;
};
