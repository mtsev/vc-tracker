// const { add_user, update_user } = require('../database/interface.js');

module.exports = async (client, oldState, newState) => {
    track(oldState, newState);
};

async function track(oldState, newState) {
    // Ignore state changes if unrelated to joining or leaving vc
    if (oldState.channel === newState.channel) return;

    // If someone someone left a voice channel, update database entry
    if (oldState.channel) {
        console.log(`${oldState.member.user.tag} left ${oldState.channel.name}`)
        // await updateUser(oldState.member.user);
    }

    // If someone joined a voice channel, add them to the database
    if (newState.channel) {
        console.log(`${newState.member.user.tag} joined ${newState.channel.name}`)
        // await addUser(newState.member.user, newState.channel);
    }
}
