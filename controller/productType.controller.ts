import { Product } from "../models";

const ProdTypeController = ()=>{
    async function add(productData:object){
         try {
           if (!productData) {
             return {
               error: true,
               errorMsg: "Product Name is Required",
               data: "",
               code: 400,
             };
           }

           let existCat = await Product.findOne(  productData ); //check once

           if (existCat) {
             return {
               error: true,
               errorMsg: "Product Name is Already Exist",
               data: "",
               code: 409,
             };
           }
           let newProduct = await Product.create(productData);
           return { error: false, errorMsg: "", data: newProduct, code: 200 };
         } catch (e: any) {
           return;
         }
    }
    async function remove(id:string){
         if (!id) {
           return {
             error: true,
             errorMsg: "id is required to remove a product",
             data: "",
             code: 404,
           };
         }

         let existProduct = await Product.findOne({ _id: id });

         if (!existProduct) {
           return {
             error: true,
             errorMsg: " No Product exist with the id provide an Valid ID",
             data: "",
             code: 404,
           };
         }

         await Product.deleteOne({ _id: id });
         return {
           error: false,
           errorMsg: "",
           data: { id: id, msg: "Deleted Successfully" },
           code: 200,
         };

    }
    async function update(id: string, data: any) {
      if (!id || !data) {
        return {
          error: true,
          errorMsg:
            "id and data to be updated is required to update a product",
          data: "",
          code: 400,
        };
      }

      let existProduct = await Product.findOne({ _id: id });

      if (!existProduct) {
        return {
          error: true,
          errorMsg: " No Product exist with the id provide an Valid ID",
          data: "",
          code: 404,
        };
      }

      await Product.updateOne({ _id: id }, { $set: { ...data } });
      let updatedCat = await Product.findOne({ _id: id });
      return { error: false, errorMsg: "", data: updatedCat, code: 200 };
    }
    async function getAll(){
              let allProduct = await Product.find({})
                .populate("supImage")
                
              if (allProduct.length === 0) {
                return {
                  error: true,
                  errorMsg: "Product List is Empty",
                  data: allProduct,
                  code: 200,
                };
              }
              return { error: false, errorMsg: "", data: allProduct, code: 200 };
    }
    async function getSingle(id:String){
              if (!id) {
                return {
                  error: true,
                  errorMsg: "id is required",
                  data: "",
                  code: 404,
                };
              }

              let existProduct = await Product.findOne({ _id: id })
                .populate("supImage")
                

              if (!existProduct) {
                return {
                  error: true,
                  errorMsg:
                    " No Product exist with the id provide an Valid ID",
                  data: "",
                  code: 404,
                };
              }

              return { error: false, errorMsg: "", data: existProduct, code: 200 };
    }

    return {
        add, remove, update ,getAll, getSingle
    }
}

export default ProdTypeController