module.exports = function (sequelize, DataTypes) {
  return sequelize.define('page', {
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
    task: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'Task'
    },
    qLanguage: {
      type: DataTypes.STRING(11),
      allowNull: false,
      field: 'QueryLanguage'
    },
    order: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'Result Order'
    },
    exitAt: {
      type: DataTypes.DATE(3),
      allowNull: true,
      field: 'exitAt'
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
    tableName: 'TaskPage',
    timestamps: true
  })
}
