import { SubCategory, Category, Slide, Product } from "../models";
// imported Subcategory Model

const subcategoryController=()=>{
    // Controller function for subcategory
    
   
//    Function to create new subcategory
    async function add(data:{name:string, cat:string, path:string}){
           
            if(!data.name||!data.cat){
                return {error:true, errorMsg:"name and cat both are required is required ", data:'', code:404} 
            }
            let newdata = new SubCategory({name:data.name, catInfo:data.cat, path:data.path})
            let newSub = await newdata.save()
            await Category.updateOne({_id:newSub.catInfo}, {$push:{subCategory:newSub._id}})
            let newSubCat =  await SubCategory.findOne({_id:newSub._id}).populate("slides").populate("catInfo").populate('products')
            return {error:false, errorMsg:"", data:newSubCat, code:200} 
    }   

    // Function to delete one subcategory using id
    async function remove(id:string){
       
        if(!id){
            return {error:true, errorMsg:"id is required to remove a SubCategory", data:'', code:404}
        }
        // if id is not provided return back with error msg 

        let existCat = await SubCategory.findOne({_id:id})
        // finding the category with the given id 

        if(!existCat){
            return {error:true, errorMsg:" No SubCategory exist with the id provide an Valid ID", data:'', code:404}
        }
        // if subcategory not matches with given id return back with error
        
        await Category.updateOne({name:existCat.catInfo.name}, {$pull:{subCategory:id}})
       
        if(existCat.slides.length>0){
            for(let i=0; i<existCat.slides.length; i++){
                await Slide.deleteOne({_id:existCat.slides[i]})
            }
        }

        if(existCat.products.length>0){
            for(let i=0; i<existCat.products.length; i++){
                await Product.deleteOne({_id:existCat.products[i]})
            }
        }
       
        
        await SubCategory.deleteOne({_id:id})
        
        return {error:false, errorMsg:"", data:{id:id, msg:id+" Deleted Successfully"}, code:200}
          // delete the subcategory and return id and success message

    }

    // Function to update the subcategory
    async function update(id:string, data:{name:string, path:string}){

        if(!id||!data){
            return {error:true, errorMsg:"id and data to be updated is required to update a SubCategory", data:'', code:400}
        }
        // if id or data any one of them is missing the return back with error

        let existCat = await SubCategory.findOne({_id:id})
        // finding the category using the given id 

        if(!existCat){
            return {error:true, errorMsg:" No SubCategory exist with the id provide an Valid ID", data:'', code:404}
        }
      
        // if subcategory not matches with given id return back with error
            if(data.name&&data.path){
                await SubCategory.updateOne({_id:id}, {$set:{name:data.name, path:data.path}})
            }else if(data.path){
                await SubCategory.updateOne({_id:id}, {$set:{path:data.path}})
            }else{
                await SubCategory.updateOne({_id:id}, {$set:{...data}})
            }
        
        // update the subcategory set the updated data

        let updatedCat = await SubCategory.findOne({_id:id}).populate("slides").populate("catInfo").populate('products')
        //  get the updated data from database using the given id

        return {error:false, errorMsg:"", data:updatedCat, code:200}
        // return the updated data 
    }

    // Function to get all the subcategories from database
    async function getAll(){
        let allcat = await SubCategory.find({}).populate("slides").populate("catInfo").populate('products')
        if(allcat.length===0){
            return { error:true, errorMsg:"SubCategory List is Empty", data:allcat, code:200 }
        }
        return { error:false, errorMsg:"", data:allcat, code:200}
    }


    async function getSingle(id:string){
        if(!id){
                    return {error:true, errorMsg:"id is required", data:'', code:404}
                }

                let existsubCat = await SubCategory.findOne({_id:id}).populate("slides").populate("catInfo").populate('products')

                if(!existsubCat){
                    return {error:true, errorMsg:" No SubCategory exist with the id provide an Valid ID", data:'', code:404}
                }

                return { error:false, errorMsg:"", data:existsubCat, code:200}
            }

    return {
        add, remove, update ,getAll, getSingle
    }
}

export default subcategoryController