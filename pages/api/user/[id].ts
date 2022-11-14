import { userController } from "../../../controller";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib";


export default async function usersOperation(req:NextApiRequest, res:NextApiResponse){
         const id = req.query.id as string
         
         await connectDB()
         if(!id){
            return res.status(404).send("Provide a Valid ID")
         }

        try{
            
            if(req.method==="GET")
            {
                let data =  await  userController().getSingle(id)
                if(data.error){
                    return res.status(data.code).send(data.errorMsg)
                }
                return res.status(data.code).send(data.data)
            }

            if(req.method==="DELETE")
            {
                let data =  await userController().remove(id)
                if(data.error){
                    return res.status(data.code).send(data.errorMsg)
                }
                return res.status(data.code).send(data.data)
            }
           
           
            if(req.method==="PATCH")
            
            {
                console.log(req.body)
                const data = req.body
                if(!data){
                    return res.status(400).send("Provide valid data to update")
                }
                
                let updatedData =  await userController().update(id, data?.password, data?.role)

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