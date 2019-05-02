module.exports = function (sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    fname: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'FName'
    },
    lname: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'LName'
    }
  }, {
    tableName: 'Users',
    timestamps: true
  })
}
