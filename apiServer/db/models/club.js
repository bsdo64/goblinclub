/**
 * Created by dobyeongsu on 2015. 10. 28..
 */
var Validation = require('../validation');

module.exports = function(sequelize, DataTypes) {
    var Club = sequelize.define('club', {
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        }
    }, {
        classMethods: {
            associate: function(models) {
                Club.belongsTo(models.user, {
                    foreignKey: {
                        name: 'creator',
                        allowNull: false
                    }
                });

                Club.belongsToMany(models.post, {
                    through: {
                        model: models.club_post,
                        unique: false
                    },
                    foreignKey: 'club_id'
                });
            }
        }
    });

    return Club;
};
