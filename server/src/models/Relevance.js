module.exports = function (sequelize, DataTypes) {
  return sequelize.define('relevance', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    userID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Users',
        key: 'ID'
      },
      field: 'userID'
    },
    resultID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'resultID'
    },
    rank: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'Rank'
    },
    relevance: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'Relevance'
    }
  }, {
    tableName: 'Relevance',
    timestamps: false
  })
}
