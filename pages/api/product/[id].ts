import { productC } from "../../../controller";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib";

export default async function productOptr(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
 
  if (!id) {
    return res.status(404).send("Provide a Valid ID");
  }

  await connectDB();

  

  try {
    if (req.method === "GET") {

      let data = await productC().getSingle(id);
      if (data.error) {
        return res.status(data.code).send(data.errorMsg);
      }
      return res.status(data.code).send(data.data);
    }

    if (req.method === "DELETE") {
      let data = await productC().remove(id);
      if (data?.error) {
        return res.status(data.code).send(data.errorMsg);
      }else{
        return res.status(data?.code||200).send(data?.data);
      }
    }


    if (req.method === "PATCH") {

      const data = req.body
    
      
     
      if (!data) {
        return res.status(400).send("Provide valid data to update");
      }
      
      let updatedData;

      if(data.type==="color"){
          updatedData = await productC().addColor(data.id, data.data)
      }
      
      if(data.type==="feature"){
        updatedData = await productC().addFeatures(data.id, data.data)
      }

       if(data.type==="size"){
        updatedData = await productC().addSize(data.id, data.data)
      }

      if(data.type==="other"){
        updatedData = await productC().update(id, data.data);
      }

      if (updatedData?.error) {
        return res.status(updatedData.code).send(updatedData.errorMsg);
      }

      return res.status(updatedData?.code||200).send(updatedData?.data);

    }

    return res.status(404).send("No Matching Routes Found");

  } catch (e: any) {
    return res.status(500).send(e.message);
  }
}
