module.exports = function (sequelize, DataTypes) {
  return sequelize.define('cities', {
    cityid: {
      type: DataTypes.INTEGER(11),
      field: 'cityid',
      primaryKey: true
    },
    cityDetails: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'cityDetails'
    },
    cityName: {
      type: DataTypes.STRING(25),
      field: 'cityName'
    }
  }, {
    tableName: 'cities'
  })
}
  