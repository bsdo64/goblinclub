/**
 * Created by dobyeongsu on 2015. 10. 28..
 */
var Validation = require('../validation');

module.exports = function(sequelize, DataTypes) {
    var subscribe = sequelize.define('subscribe', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        club_id: {
            type: DataTypes.INTEGER,
            unique: 'club_subscribe',
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            unique: 'club_subscribe',
            allowNull: false
        }
    });

    return subscribe;
};
