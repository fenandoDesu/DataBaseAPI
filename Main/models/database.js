const Sequelize = require('sequelize')
const connection = new Sequelize('myDB', 'root', 'escola', {
    host:'localhost', dialect:'mysql', logging:false
})

module.export = connection