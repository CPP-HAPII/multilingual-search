module.exports = function (sequelize, DataTypes) {
  return sequelize.define('questions', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'ID'
    },
    question: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'Question'
    },
    answer1: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'Answer1'
    },
    answer2: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'Answer2'
    },
    answer3: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'Answer3'
    },
    answer4: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'Answer4'
    }
  }, {
    tableName: 'Questions',
    timestamps: true
  })
}
