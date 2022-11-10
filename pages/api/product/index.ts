import { ProdTypeController } from "../../../controller";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib";

async function Product(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body;

  await connectDB();
  if (req.method === "GET") {
    const categories = await ProdTypeController ().getAll();
    if (categories.error) {
      return res.status(categories.code).send(categories.errorMsg);
    }
    return res.status(categories.code).send(categories.data);
  }

  if (req.method === "POST") {
    console.log(req.body, req.method);
    if (!name) {
      return res.status(400).send("Provide a name for Product");
    }

    let data = await ProdTypeController ().add(name);

    if (data?.error) {
      return res.status(data.code).send(data.errorMsg);
    } else {
      return res.status(data?.code || 200).send(data?.data);
    }
  }

  return res.status(404).send("Only Get Method is Allowed to this route");
}

export default Product;
