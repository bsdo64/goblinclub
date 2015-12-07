/**
 * Created by dobyeongsu on 2015. 10. 28..
 */
var Validation = require('../validation');

module.exports = function (sequelize, DataTypes) {
  var Comment = sequelize.define('comment', {
    comment_id: {
      type: DataTypes.STRING,
      unique: true
    },
    post_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT
    },
    voteCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    likeCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    dislikeCount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
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
      associate: function (models) {
        Comment.belongsTo(models.user, {
          foreignKey: {
            name: 'author',
            allowNull: false
          }
        });

        Comment.belongsTo(models.post, {
          foreignKey: 'post_id'
        });

        Comment.hasMany(models.commentcontent, {
          foreignKey: {
            name: 'comment_id',
            allowNull: true
          }
        });
      }
    },

    hierarchy: true
  });

  return Comment;
};
