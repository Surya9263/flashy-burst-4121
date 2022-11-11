import {Product, SupImage } from "../models";



const SupImageController = ()=>{
    
    async function add(data:{prodid:string, imglink:string}){
         
           try {
             if (!data.prodid||!data.imglink) {
               return {
                 error: true,
                 errorMsg: "prodid and imglink both are Required",
                 data: "",
                 code: 400,
               };
             }
  
             let existCat = await SupImage.findOne({product:data.prodid, imglink:data.imglink}); //check once
             
              
             if (existCat) {
               return {
                 error: true,
                 errorMsg: "Already Exist",
                 data: "",
                 code: 409,
               };
             }
             let newType = await SupImage.create({product:data.prodid, imglink:data.imglink});
             
           let responce =   await Product.updateOne({_id:newType.product},{$push:{supImg:newType._id}})
           
             let typewithPopulated = await SupImage.findOne({_id:newType._id}).populate('product')
                           
             return { error:false, errorMsg:"", data:typewithPopulated, code:200 };
  
           } catch (e:any) {
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
  
           let existProduct = await SupImage.findOne({_id:id});
  
           if (!existProduct) {
             return {
               error: true,
               errorMsg: " No Product type exist with the id,  provide an Valid ID",
               data: "",
               code: 404,
             };
           }
           await Product.updateOne({_id:existProduct.product}, {$pull:{supImg:existProduct._id}})
           await SupImage.deleteOne({_id:id});
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
  
        let existProduct = await SupImage.findOne({ _id:id});
  
        if (!existProduct) {
          return {
            error: true,
            errorMsg: " No Product exist with the id provide an Valid ID",
            data: "",
            code: 404,
          };
        }
  
        await SupImage.updateOne({ _id:id }, { $set: {...data} });
        let updatedtone = await SupImage.findOne({ _id: id }).populate('product');
        return { error: false, errorMsg: "", data:updatedtone, code: 200 };
      }
  
  
      async function getAll(){
                let allProduct = await SupImage.find({}).populate("product")
                  
                if (allProduct.length === 0) {
                  return {
                    error: false,
                    errorMsg: " List is Empty",
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
  
                let existProduct = await SupImage.findOne({ _id:id }).populate('product')
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
  
  export default SupImageController