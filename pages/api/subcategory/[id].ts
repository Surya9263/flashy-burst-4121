import { subcategoryC } from "../../../controller";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib";


export default async function subcategoryOprs(req:NextApiRequest, res:NextApiResponse){
         const id = req.query.id as string
         const data = req.body.data
        
         console.log(req.body);
         await connectDB()
        
         if(!id){
            return res.status(404).send("Provide a Valid ID")
         }

        try{
            
            if(req.method==="GET")
            {
                let data =  await  subcategoryC().getSingle(id)
                if(data.error){
                    return res.status(data.code).send(data.errorMsg)
                }
                return res.status(data.code).send(data.data)
            }

            if(req.method==="DELETE")
            {
                let data =  await subcategoryC().remove(id)
                if(data.error){
                    return res.status(data.code).send(data.errorMsg)
                }
                return res.status(data.code).send(data.data)
            }
           
           
            if(req.method==="PATCH")
            {
               
                                
                if(!data){
                    return res.status(400).send("Provide valid data to update")
                }
                
                let updatedData =  await subcategoryC().update(id, data)

                if(updatedData.error){
                    return res.status(updatedData.code).send(updatedData.errorMsg)
                }
                return res.status(updatedData.code).send(updatedData.data)
            }

            return res.status(404).send("No Mathing Routes Found")
        }catch(e:any){
            return res.status(500).send(e.message)
        }

}