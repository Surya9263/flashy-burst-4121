import { SupImageC } from "../../../controller";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib";


export default async function SupImagepath(req:NextApiRequest, res:NextApiResponse){

    await connectDB()

    if(req.method==="GET")
    {
        const images = await SupImageC().getAll();
       
        
        if(images.error){
            return res.status(images.code).send(images.errorMsg)
        }
        return res.status(images.code).send(images.data)
    }

    if(req.method==="POST"){
        let data = req.body 
        
        
        if(!data){
            return res.status(400).send("Provide a name for Project")
        }

        let added =  await SupImageC().add(data)

        if(added?.error){
            return res.status(added.code).send(added.errorMsg)
        }else{
            return res.status(added?.code||200).send(added?.data)
        }
    }
    
    return res.status(404).send("Only Get and POST Method is Allowed to this route")
    
}

