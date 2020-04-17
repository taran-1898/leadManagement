module.exports = function (sequelize, DataTypes) {
  return sequelize.define('leads', {
    leadid: {
      type: DataTypes.INTEGER(11),
      field: 'leadid',
      primaryKey: true
    },
    cityid: {
      type: DataTypes.INTEGER(11),
      field: 'cityid'
    },
    agentid: {
      type: DataTypes.INTEGER(11),
      field: 'agentid'
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      field: 'createdAt'
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'name'
    }
  }, {
    tableName: 'leads'
  })
}