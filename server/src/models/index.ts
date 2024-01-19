const Pieza = require('./pieza')
const Herramienta = require('./herramienta')
const Orden = require('./orden')
const Movimiento = require('./movimiento')
const Usuario = require('./usuario')
const { sequelize } = require('../utils/db')

sequelize.sync().then(() => {
  Pieza.hasOne(Movimiento, { foreignKey: 'id' })
  Movimiento.belongsTo(Pieza, { foreignKey: 'id' })

  Pieza.hasOne(Herramienta, { foreignKey: 'id' })
  Herramienta.belongsTo(Pieza, { foreignKey: 'id' })

  Pieza.belongsTo(Orden, { foreignKey: 'orden' })
  Orden.hasMany(Pieza, { foreignKey: 'orden' })

  console.log('All models were synchronized successfully.')
})
export {}

module.exports = {
  Usuario,
  Movimiento,
  Pieza,
  Orden,
  Herramienta
}
