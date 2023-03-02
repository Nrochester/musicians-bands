const {Sequelize, sequelize} = require('./db');

// TODO - define the Band model
let Band = sequelize.define("Band",{
    name: Sequelize.TEXT,
    genre: Sequelize.TEXT,
});

module.exports = {
    Band
};