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
    },
    queryLanguage: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'QueryLanguage'
    },
    createdAt: {
      type: DataTypes.DATE(3),
      allowNull: false,
      defaultValue: sequelize.fn('NOW', 3)
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      allowNull: false,
      defaultValue: sequelize.fn('NOW', 3)
    }
  }, {
    tableName: 'Relevance',
    timestamps: true
  })
}
