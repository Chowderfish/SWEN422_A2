export default (entities, {dispatch}) => {
  let {camera} = entities;

  entities.score.score = Math.floor(
    Math.max(entities.score.score,
      Math.abs(camera.offsetY)*1000
    ));

  dispatch({type:'score-update', value: entities.score.score});

  return entities;
};
