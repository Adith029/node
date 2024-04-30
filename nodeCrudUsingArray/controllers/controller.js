const { response } = require('express')
const db= require('../Models/db')

const myList =[{}]
const addList =async(req,res)=>{
    const {name,age,place} = req.body
    const list = await myList.push({name,age,place})
    return res.status(200).send({response:myList})
}

const readList=async(req,res)=>{
    return res.status(200).send(myList)
}

const updateList=async(req,res)=>{
    const {index} = req.params
    console.log('Request Params:', req.params);
    const {name,age,place}=req.body

    console.log('Index:', index);
    console.log('Name:', name);
    console.log('Age:', age);
    console.log('Place:', place);

    if(index>=0 && index<myList.length){
    myList[index]={name,age,place}
    return res.status(200).send({response:myList})
}
return res.status(404).send({ error: 'Index out of range' });   
}

const deleteUser= async(req,res)=>{
    const {index} = req.params
    if(index>=0 && index<myList.length){
        myList.splice(index,1)
        return res.status(200).send({message:"Deleted"})
    }
    return res.status(500).send({message:"internal Server error"})
}
module.exports = {addList,readList,updateList,deleteUser}
    