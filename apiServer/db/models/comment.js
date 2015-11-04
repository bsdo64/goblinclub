/**
 * Created by dobyeongsu on 2015. 10. 28..
 */
var Validation = require('../validation');

module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define('comment', {
        _id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        content: {
            type: DataTypes.STRING
        },

        deletedAt: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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

    return Comment;
};
