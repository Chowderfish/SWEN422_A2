export default (entities, { events }) => {

    let aim = events.find(e => e.type === "aim");

    if(aim){
        entities.aim.aim = aim.aim_vector;
    }


    return entities;
};
