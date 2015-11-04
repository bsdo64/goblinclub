/**
 * Created by dobyeongsu on 2015. 10. 28..
 */

module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define('post', {
        _id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
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
    },{
        classMethods: {
            associate: function(models) {
                Post.belongsTo(models.user, {
                    onDelete: "CASCADE",
                    foreignKey: 'author'
                });

                Post.belongsToMany(models.club, {
                    through: {
                        model: models.club_post,
                        unique: false
                    },
                    foreignKey: 'post_id'
                });
            }
        }
    });

    return Post;
};