import {Category, SubCategory} from '../models/'
import { subcategoryC } from '.'
const categoryController = ()=>{
    
    async function add(catName:string){
        try{
            if(!catName){
                return {error:true, errorMsg:"Category Name is Required", data:'', code:400}
            }

            let existCat = await Category.findOne({name:catName}) 

            if(existCat){
                    return {error:true, errorMsg:"Category Name is Already Exist", data:'', code:409}
            }
            let newCat = await Category.create({name:catName})
            return {error:false, errorMsg:"", data:newCat, code:200}

        }catch(e:any){
           return 
        }
    }


    async function remove(id:string){
       
        if(!id){
            return {error:true, errorMsg:"id is required to remove a categoty", data:'', code:404}
        }

        let existCat = await Category.findOne({_id:id}) 

        if(!existCat){
            return {error:true, errorMsg:" No Category exist with the id provide an Valid ID", data:'', code:404}
        }
        if(existCat.subCategory.length>0){
            for(let i=0; i<existCat.subCategory.length; i++){
                await subcategoryC().remove(existCat.subCategory[i])    
            }
        }

        await Category.deleteOne({_id:id})
        return {error:false, errorMsg:"", data:{id:id, msg:"Deleted Successfully"}, code:200}

    }


    async function update(id:string, data:any){
       
        if(!id||!data){
            return {error:true, errorMsg:"id and data to be updated is required to update a categoty", data:'', code:400}
        }

         let existCat = await Category.findOne({_id:id})

        if(!existCat){
            return {error:true, errorMsg:" No Category exist with the id provide an Valid ID", data:'', code:404}
        }

        await Category.updateOne({_id:id}, {$set:{...data}})
        let updatedCat = await Category.findOne({_id:id})
        return {error:false, errorMsg:"", data:updatedCat, code:200}
    }


    async function getAll(){
        let allcat = await Category.find({}).populate('slides').populate('subCategory')
        if(allcat.length===0){
            return { error:true, errorMsg:"Category List is Empty", data:allcat, code:200 }
        }
        return { error:false, errorMsg:"", data:allcat, code:200}
    }   

    async function getSingle(id:string){
        if(!id){
            return {error:true, errorMsg:"id is required", data:'', code:404}
        }

        let existCat = await Category.findOne({_id:id}).populate('slides').populate('subCategory')

        if(!existCat){
            return {error:true, errorMsg:" No Category exist with the id provide an Valid ID", data:'', code:404}
        }

        return { error:false, errorMsg:"", data:existCat, code:200}
    }

    return {
        add, remove, update ,getAll, getSingle
    }
}

export default categoryController