/**
 * Created by dobyeongsu on 2015. 10. 28..
 */
var Validation = require('../validation');

module.exports = function (sequelize, DataTypes) {
  var ClubPost = sequelize.define('club_post', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    clubId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    postId: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    }
  });

  return ClubPost;
};
