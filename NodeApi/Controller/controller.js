const schema=require ('../Model/Crud')
const bcrypt = require('bcrypt')

const register =async(req,res)=>{
    const {userBody}=req.body
    const plainPassword = userBody.password
    const saltRound =10
    const hashedPassword = await bcrypt.hash(plainPassword,saltRound)
    userBody.password=hashedPassword
    const response = await schema.create(userBody)
    return res.status(200).send(response)
}
module.exports={register}