/**
 * Created by dobyeongsu on 2015. 10. 28..
 */
var Validation = require('../validation');

module.exports = function(sequelize, DataTypes) {
    var UserRead = sequelize.define('user_subscribe', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        club_id: {
            type: DataTypes.INTEGER,
            unique: 'club_user',
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            unique: 'club_user',
            allowNull: false
        }
    },{
        classMethods: {
            associate: function(models) {
                UserRead.belongsTo(models.user, {
                    onDelete: "CASCADE",
                    foreignKey: 'user_id',
                    allowNull: false
                });
                UserRead.belongsTo(models.club, {
                    onDelete: "CASCADE",
                    foreignKey: 'club_id',
                    allowNull: false
                });
            }
        }
    });

    return UserRead;
};
