/**
 * Created by dobyeongsu on 2015. 11. 11..
 */
module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define('post', {
    _id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING
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
    comment_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    vote_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    like_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    dislike_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        Post.belongsTo(models.user, {
          onDelete: "CASCADE",
          foreignKey: 'author',
          allowNull: false
        });

        Post.belongsToMany(models.club, {
          through: {
            model: models.club_post,
            unique: false
          },
          foreignKey: 'post_id'
        });

        Post.hasMany(models.comment, {
          foreignKey: 'post_id'
        });

        Post.hasMany(models.postcontent, {
          foreignKey: 'post_id'
        });
      }
    }
  });

  return Post;
};