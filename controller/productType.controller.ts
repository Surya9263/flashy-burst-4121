import { ProductType } from "../models";

const ProdTypeController = ()=>{
    
  async function add(data:{catid:string, typename:string}){
         try {
           if (!data.catid||data.typename) {
             return {
               error: true,
               errorMsg: "catid and type both are Required",
               data: "",
               code: 400,
             };
           }

           let existCat = await ProductType.findOne({name:data.typename, category:data.catid}); //check once

           if (existCat) {
             return {
               error: true,
               errorMsg: "Already Exist",
               data: "",
               code: 409,
             };
           }
           let newType = await ProductType.create({category:data.catid, name:data.typename});
           let typewithPopulated = ProductType.findOne({_id:newType._id}).populate('category')

           return { error: false, errorMsg: "", data: typewithPopulated, code: 200 };

         } catch (e: any) {
           return { error: true, errorMsg: e.message, data:"", code: 500 }
         }
    }



    async function remove(id:string){
         if (!id) {
           return {
             error: true,
             errorMsg: "id is required to remove a product type",
             data: "",
             code: 404,
           };
         }

         let existProduct = await ProductType.findOne({_id:id});

         if (!existProduct) {
           return {
             error: true,
             errorMsg: " No Product type exist with the id,  provide an Valid ID",
             data: "",
             code: 404,
           };
         }
         await ProductType.deleteOne({_id:id});
         return {
           error: false,
           errorMsg: "",
           data: { id: id, msg: "Deleted Successfully" },
           code: 200,
         };

    }
    async function update(id:string, data:any) {
      if (!id || !data) {
        return {
          error: true,
          errorMsg:
            "id and data to be updated is required to update a product type",
          data: "",
          code: 400,
        };
      }

      let existProduct = await ProductType.findOne({ _id:id });

      if (!existProduct) {
        return {
          error: true,
          errorMsg: " No Product exist with the id provide an Valid ID",
          data: "",
          code: 404,
        };
      }

      await ProductType.updateOne({ _id:id }, { $set: {...data} });
      let updatedtype = await ProductType.findOne({ _id: id }).populate('category');
      return { error: false, errorMsg: "", data:updatedtype, code: 200 };
    }


    async function getAll(){
              let allProduct = await ProductType.find({}).populate("category")
                
              if (allProduct.length === 0) {
                return {
                  error: false,
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

              let existProduct = await ProductType.findOne({ _id:id }).populate('category')
              if (!existProduct) {
                return {
                  error: true,
                  errorMsg:
                    " No Product type exist with the id provide an Valid ID",
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