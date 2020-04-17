module.exports = function (sequelize, DataTypes) {
  return sequelize.define('agents', {
    agentid: {
      type: DataTypes.INTEGER(11),
      field: 'agentid',
      primaryKey: true
    },
    cityid: {
      type: DataTypes.INTEGER(11),
      field: 'cityid'
    },
    bucketSize: {
      type: DataTypes.INTEGER(4),
      field: 'bucketSize'
    },
    agentName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'agentName'
    }
  }, {
    tableName: 'agents'
  })
}