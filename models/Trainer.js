const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

//Defined Pokemon Association w Trainer
const Pokemon = require("./Pokemon");
Trainer.hasMany(Pokemon);


const Trainer = db.define("Trainer", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Trainer;