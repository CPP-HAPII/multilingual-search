module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      // autoIncrement: true,
      field: 'ID'
    },
    englishScore: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'EnglishScore'
    },
    language: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'Language'
    },
    secondaryScore: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'SecondaryScore'
    }
  }, {
    tableName: 'Users',
    timestamps: false
  })
}
