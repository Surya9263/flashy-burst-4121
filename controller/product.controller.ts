import { Product, Category, SubCategory } from "../models";


const productController = ()=>{

    async function add(data:{category:string,subCategory:string, pType:string, name:string,price:string, mainImg:string, discription:string}){
    
    if(!data.category||!data.subCategory|| !data.pType|| !data.name||!data.price|| !data.mainImg|| !data.discription){
        return { 
            error: true,
            errorMsg: "required fields are missing",
            data: "",
            code: 400,
          };
        }      
    
        let newproduct = await Product.create({category:data.category, SubCategory:data.subCategory, pType:data.pType, name:data.name, price:data.price, mainImg:data.mainImg, discription:data.discription}) 
        await Category.updateOne({_id:newproduct.category}, {$push:{products:newproduct._id}})
        let productwithPopdata = await  Product.findOne({_id:newproduct._id}).populate('category').populate('subCategory').populate('pType').populate("supImg")
        return { error: false, errorMsg: "", data: productwithPopdata, code: 200 };
    }

    
    async function remove(id:string){
        if(!id){
            return { 
                error: true,
                errorMsg: "required field is missing",
                data: "",
                code: 400,
                };
         }

         let exitsProdut = await Product.findOne({_id:id})
         if(!exitsProdut){
            return { 
                error: true,
                errorMsg: "incorrect id, product not found",
                data: "",
                code: 400,
                };
         }

         await Category.updateOne({_id:exitsProdut.category}, {$pull:{products:exitsProdut._id}})
         await Product.deleteOne({_id:id})

    }


    async function update(id:string, data:any){
                
                if(!id||!data){
                    return {
                        error: true,
                        errorMsg: "incorrect id, or data",
                        data: "",
                        code: 400,
                        };  
                    }
                
                let exist = await Product.findOne({_id:id})

                if(!exist){
                    return {
                        error: true,
                        errorMsg: "incorrect id, product not found",
                        data: "",
                        code: 400,
                        };  
                    }
                
                 await Product.updateOne({_id:id}, {$set:{...data}})
                 let updatedProduct =  await Product.findOne({_id:id}).populate('category').populate('subCategory').populate('pType').populate("supImg")
                
                 return {
                    error: false,
                    errorMsg: "",
                    data: updatedProduct,
                    code: 200,
                    }; 
                 
    }


    async function getAll(){
        let allProduct = await Product.find({}).populate('category').populate('subCategory').populate('pType').populate("supImg")
                
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

    async function getSingle(id:string){
        let product1 = await Product.findOne().populate('category').populate('subCategory').populate('pType').populate("supImg")
                
        if (!product1) {
          return {
            error: true,
            errorMsg: "PProduct not found",
            data: product1,
            code: 404,
          };
        }

        return { error: false, errorMsg: "", data:product1, code: 200 };
    }

    async function addColor(id:string, colorName:string){
        if(!id||colorName){
                return {
                    error: true,
                    errorMsg: "Product not found",
                    data: "",
                    code: 400,
                }
            }
          await Product.updateOne({_id:id}, {$push:{colors:colorName}})
          let updatedProduct = await Product.findOne({_id:id}).populate('category').populate('subCategory').populate('pType').populate("supImg")
         return {
            error: false,
            errorMsg:"",
            data:updatedProduct,
            code: 200,
         }
    }

    async function addSize(id:string, pSize:string){
       
        if(!id||pSize){
            return {
                error: true,
                errorMsg: "Product not found",
                data: "",
                code: 400,
            }
        }

        await Product.updateOne({_id:id}, {$push:{psize:pSize}})
          let updatedProduct = await Product.findOne({_id:id}).populate('category').populate('subCategory').populate('pType').populate("supImg")
         return {
            error: false,
            errorMsg:"",
            data:updatedProduct,
            code: 200,
         }


    }
    async function addFeatures(id:string, feature:string){
        
        if(!id||feature){
            return {
                error: true,
                errorMsg: "Product not found",
                data: "",
                code: 400,
            }
        }
        await Product.updateOne({_id:id}, {$push:{features:feature}})
          let updatedProduct = await Product.findOne({_id:id}).populate('category').populate('subCategory').populate('pType').populate("supImg")
         return {
            error: false,
            errorMsg:"",
            data:updatedProduct,
            code: 200,
         }
    }

    return {
        add, remove, update ,getAll, getSingle, addColor, addSize, addFeatures
    }
}

export default productController