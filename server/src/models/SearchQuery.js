module.exports = function (sequelize, DataTypes) {
  return sequelize.define('searchQuery', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    query: {
      type: DataTypes.STRING(70),
      allowNull: false,
      field: 'Query'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'Description'
    },
    language: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'Language'
    }
  }, {
    tableName: 'SearchQuery',
    timestamps: false
  })
}
