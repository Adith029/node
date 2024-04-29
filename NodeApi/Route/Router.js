const { Router}  = require ("express")
const crudDB = require("../Model/Crud")
const userController = require("../Controller/controller")
const route = Router()

route.post('/post',userController.register)


module.exports = route