module.exports = function (sequelize, DataTypes) {
  return sequelize.define('results', {
    // id: {
    //   type: DataTypes.INTEGER(11),
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true,
    //   field: 'ID'
    // },
    qId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SearchQuery',
        key: 'ID'
      },
      field: 'qID'
    },
    rank: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      field: 'Rank'
    },
    url: {
      type: DataTypes.STRING(300),
      allowNull: false,
      field: 'URL'
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'Title'
    },
    snippet: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'Snippet'
    },
    language: {
      type: DataTypes.STRING(45),
      allowNull: false,
      field: 'Language'
    }
  }, {
    tableName: 'Results',
    timestamps: false
  })
}
