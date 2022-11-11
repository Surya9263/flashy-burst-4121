// {catid, subcatid,urltype, imgurl, navurl }
import { slideController } from "../../../controller";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib";

const slide = async(req:NextApiRequest, res:NextApiResponse)=>{
    
    // const {catid, subcatid,urltype, imgurl, navurl } = req.body
    const slideData =  req.body;

    await connectDB()

    if(req.method==="GET")
    {
        const slides = await slideController().getAll();
        console.log(slides);
        
        if(slides.error){
            return res.status(slides.code).send(slides.errorMsg)
        }
        return res.status(slides.code).send(slides.data)
    }


    if(req.method==="POST"){
       
        if(!slideData){
            return res.status(400).send("Provide a name for subcategory")
        }

        let data =  await slideController().add(slideData)

        if(data?.error){
            return res.status(data.code).send(data.errorMsg)
        }else{
            return res.status(data?.code||200).send(data?.data)
        }
       
    }
    
    return res.status(404).send("Only Get Method is Allowed to this route")    
}


export default slide