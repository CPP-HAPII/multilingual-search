module.exports = function (sequelize, DataTypes) {
  return sequelize.define('demographic', {
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
    firstLanguage: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'FirstLanguage'
    },
    englishProf: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'English'
    },
    secondary: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'Secondary'
    },
    origin: {
      type: DataTypes.STRING(30),
      allowNull: false,
      field: 'Origin'
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'Age'
    },
    experience: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'Experience'
    }
  }, {
    tableName: 'Demographic',
    timestamps: true
  })
}
