import { ProdTypeC } from "../../../controller";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib";


async function ProductType(req:NextApiRequest, res:NextApiResponse){

    await connectDB()

    if(req.method==="GET")
    {
        const products = await ProdTypeC().getAll();
        if(products.error){
            return res.status(products.code).send(products.errorMsg)
        }
        return res.status(products.code).send(products.data)
    }

    if(req.method==="POST"){
        let data = req.body 
        if(!data){
            return res.status(400).send("Provide a name for Project")
        }

        let addedProduct =  await ProdTypeC().add(data)

        if(addedProduct?.error){
            return res.status(addedProduct.code).send(addedProduct.errorMsg)
        }else{
            return res.status(addedProduct?.code||200).send(addedProduct?.data)
        }
    }
    
    return res.status(404).send("Only Get and POST Method is Allowed to this route")
    
}

export default ProductType