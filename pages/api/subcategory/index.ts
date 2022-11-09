import { subcategoryC } from "../../../controller";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib";


async function SubCategory(req:NextApiRequest, res:NextApiResponse){
    const subCatdata = req.body 

    
    await connectDB()
    if(req.method==="GET")
    {
        const categories = await subcategoryC().getAll();
        console.log(categories);
        
        if(categories.error){
            return res.status(categories.code).send(categories.errorMsg)
        }
        return res.status(categories.code).send(categories.data)
    }


    if(req.method==="POST"){
       
        if(!subCatdata){
            return res.status(400).send("Provide a name for subcategory")
        }

        let data =  await subcategoryC().add(subCatdata)

        if(data?.error){
            return res.status(data.code).send(data.errorMsg)
        }else{
            return res.status(data?.code||200).send(data?.data)
        }
       
    }
    
    return res.status(404).send("Only Get Method is Allowed to this route")
    
}

export default SubCategory