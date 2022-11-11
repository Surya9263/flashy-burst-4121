import { NextApiRequest, NextApiResponse } from "next";
import { sessionC } from "../../../controller";
import { connectDB } from "../../../lib";

export default async function loginApi (req:NextApiRequest,res:NextApiResponse) {
    console.log(req.body,"vai");
    
    if(req.method==="POST"){
    const {email,password} = req.body
    if(!email||!password){
        return res.status(404).send("invalid user id and password")
    }

    try{
        await connectDB()
        let data = await sessionC().getToken(email, password)
        if(data.error){
            return res.status(data.code).send(data.errorMsg)
        }
        return res.status(200).send({error:data.error, data:data.data?.decoded})
    }catch(e:any){
        res.status(500).send("Server Error "+e.message)
    }
    }

    else{
        res.status(404).send("Path not found")
    }
}