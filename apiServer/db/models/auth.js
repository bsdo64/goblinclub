/**
 * Created by dobyeongsu on 2015. 10. 28..
 */
var Validation = require('../validation');

module.exports = function(sequelize, DataTypes) {
    var Auth = sequelize.define('auth', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email_verify: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        email_verify_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        drop_user: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        drop_at: {
            type: DataTypes.DATE
        },
        login_at: {
            type: DataTypes.DATE
        },
        logout_at: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.STRING
        }
    }, {
        classMethods: {
            associate: function(models) {
                Auth.belongsTo(models.user);
            }
        }
    });

    return Auth;
};
