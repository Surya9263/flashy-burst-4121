import { cartC } from "../../../controller";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib";


async function Category(req:NextApiRequest, res:NextApiResponse){
   
    
    await connectDB()
    if(req.method==="GET")
    {
        let cartItems;
        const userId = req.headers.id as string
        if(userId){           
            cartItems = await cartC().getSingle(userId);
        }else{
            cartItems = await cartC().getAll();
            console.log("insideAll",userId);
          
        }
        if(cartItems.error){
            return res.status(cartItems.code).send(cartItems.errorMsg)
        }
        return res.status(cartItems.code).send(cartItems.data)
    }

    if(req.method==="POST"){
           const data=req.body;
        if(!data){
            return res.status(400).send("Provide cart details")
        }

        let newCartItem =  await cartC().add(data)

        if(newCartItem?.error){
            return res.status(newCartItem.code).send(newCartItem.errorMsg)
        }else{
            return res.status(newCartItem?.code||200).send(newCartItem?.data)
        }
       
    }

    if(req.method==="PATCH"){
        const userid = req.body.userId;
        if(!userid){
            return res.status(400).send("Invalid User Id")
        }
        let newCartItem =  await cartC().orderPlaced(userid)
        return res.status(200).send("Updated SuccessFully")
    }
    
    return res.status(404).send("Only Get Method is Allowed to this route")
    
}

export default Category