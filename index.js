const {Band} = require('./Band')
const {Musician} = require('./Musician')

Band.hasMany(Musician);
Band.hasMany(Song);
Song.belongsTo(Band);
Musician.belongsTo(Band);

module.exports = {
    Band,
    Musician
};
