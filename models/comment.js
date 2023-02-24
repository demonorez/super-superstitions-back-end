'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Superstition, {
        foreignKey: 'superstitionId',
      })
    }
  }
  Comment.init({
    text: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    superstitionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Superstitions',
        key: 'id'
      },
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};