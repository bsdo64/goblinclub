/**
 * Created by dobyeongsu on 2015. 10. 28..
 */
var Validation = require('../validation');

module.exports = function(sequelize, DataTypes) {
    var ClubPost = sequelize.define('club_post', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        club_id: {
            type: DataTypes.STRING,
            unique: 'club_post'
        },
        post_id: {
            type: DataTypes.STRING,
            unique: 'club_post'
        }
    });

    return ClubPost;
};
