/**
 * Created by dobyeongsu on 2015. 10. 28..
 */
var Validation = require('../validation');

module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define('comment', {
        comment_id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        post_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT
        },
        deletedAt: {
            type: DataTypes.DATE,
            defaultValue: null
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        parent_id: {
            type: DataTypes.STRING,
            defaultValue: null
        }
    }, {
        classMethods: {
            associate: function(models) {
                Comment.belongsTo(models.user, {
                    foreignKey: {
                        name: 'author',
                        allowNull: false
                    }
                });

                Comment.belongsTo(models.post, {
                    foreignKey: 'post_id'
                });

                Comment.belongsTo(Comment, {
                    foreignKey: {
                        name: 'parent_id',
                        allowNull: true
                    }
                });

                Comment.hasMany(models.commentcontent, {
                    foreignKey: {
                        name: 'comment_id',
                        allowNull: true
                    }
                });
            }
        }
    });

    return Comment;
};
