const {Router} = require('express')
const userController = require('../controllers/controller')
const route = Router()

route.post('/add',userController.addList)
route.get('/read',userController.readList,)
route.patch('/update/:index',userController.updateList)
route.delete('/delete/:index',userController.deleteUser,)


module.exports = route