/**
 * Created by dobyeongsu on 2015. 10. 28..
 */
var Validation = require('../validation');

module.exports = function (sequelize, DataTypes) {
  var ClubUser = sequelize.define('club_user', {
    id: {
      type: DataTypes.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    club_id: {
      type: DataTypes.STRING,
      unique: 'club_user',
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      unique: 'club_user',
      allowNull: false
    }
  });

  return ClubUser;
};
