import { userController } from "../../../controller";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib";


async function userApi(req:NextApiRequest, res:NextApiResponse){
    await connectDB()
    if(req.method==="GET")
    {
        const userData = await userController().getAll();
        if(userData.error){
            return res.status(userData.code).send(userData.errorMsg)
        }
        return res.status(userData.code).send(userData.data)
    }

    if(req.method==="POST"){
        const {name, email, password} = req.body
        
        if(!name||!email||!password){
            return res.status(400).send("Provide name, email, password")
        }

        let data =  await userController().add({name, email, password})

        if(data?.error){
            return res.status(data.code).send(data.errorMsg)
        }else{
            return res.status(data?.code||200).send(data?.data)
        }
       
    }
    
    return res.status(404).send("Only Get Method is Allowed to this route")
    
}

export default userApi