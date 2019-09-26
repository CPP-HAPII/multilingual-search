module.exports = function (sequelize, DataTypes) {
  return sequelize.define('experience', {
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
    q1: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'Answer1'
    },
    q2: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'Answer2'
    },
    q3: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'Answer3'
    },
    q4: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'Answer4'
    },
    experience: {
      type: DataTypes.STRING(300),
      allowNull: true,
      field: 'Experience'
    }
  }, {
    tableName: 'Experience',
    timestamps: true
  })
}
