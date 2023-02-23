'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superstition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Superstition.belongsTo(models.Profile, { foreignKey: 'ProfileId'})
    }
  }
  Superstition.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id',
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    category: {
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'Superstition',
  });
  return Superstition;
};