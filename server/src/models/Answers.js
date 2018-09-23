module.exports = function (sequelize, DataTypes) {
  return sequelize.define('answer', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    questionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'QuestionID'
    },
    answer: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'Answer'
    }
  }, {
    tableName: 'Answers',
    timestamps: true
  })
}
