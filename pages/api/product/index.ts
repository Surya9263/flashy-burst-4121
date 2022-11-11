import { productC } from "../../../controller";
import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib";

async function Product(req: NextApiRequest, res: NextApiResponse) {


  await connectDB();
  if (req.method === "GET") {
    const products = await productC().getAll();
    if (products.error) {
      return res.status(products.code).send(products.errorMsg);
    }
    return res.status(products.code).send(products.data);
  }

  if (req.method === "POST") {
      const data = req.body

    if (!data) {
      return res.status(400).send("Provide a name for Product");
    }

    let added = await productC().add(data);

    if (added?.error) {
      return res.status(added.code).send(added.errorMsg);
    } else {
      return res.status(added?.code || 200).send(added?.data);
    }
  }

  return res.status(404).send("Only Get and POST Method is Allowed to this route");
}

export default Product;
