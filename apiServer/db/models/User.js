/**
 * Created by dobyeongsu on 2015. 10. 28..
 */

var Validation = require('../validation');

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: Validation.User.email
        },
        nick: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: Validation.User.nick
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: Validation.User.password
        }
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.post, {
                    foreignKey: {
                        name: 'author',
                        allowNull: false
                    }
                });

                User.hasMany(models.club, {
                    foreignKey: {
                        name: 'creator',
                        allowNull: false
                    }
                });
            }
        }
    });

    return User;
};
