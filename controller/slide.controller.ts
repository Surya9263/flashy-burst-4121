import {Slide, Category, SubCategory} from '../models/'

const slideController = ()=>{

    async function add({catid, subcatid,urltype, imgurl, navurl }:{catid:string, subcatid:string,urltype:string, imgurl:string, navurl:string }){
        
        if(!catid||!subcatid||!urltype||!imgurl||!navurl){
            return {error:true, errorMsg:"catid, subcatid,urltype, imgurl, navurl all the fields are required", data:"", code:400}
        }

        let newSlide = await Slide.create({category:catid, subcategory:subcatid,urlType:urltype, imgurl:imgurl, navigateUrl:navurl})

        await Category.updateOne({_id:newSlide.category},{$push:{slides:newSlide._id}})
        await SubCategory.updateOne({_id:newSlide.subcategory},{$push:{slides:newSlide._id}})

        return {error:false, errorMsg:"", data:newSlide, code:200}
    }
    
    async function remove(id:string){
        if(!id){
            return {error:true, errorMsg:"id is required to remove a slide", data:'', code:404}
        }

        let existCat = await Slide.findOne({_id:id}) 

        if(!existCat){
            return {error:true, errorMsg:" No Slide exist with the id provide an Valid ID", data:'', code:404}
        }

        await Slide.deleteOne({_id:id})
        return {error:false, errorMsg:"", data:{id:id, msg:"Deleted Successfully"}, code:200}
    }

    async function update(id:string, data:any){
        
        if(!id||!data){
            return {error:true, errorMsg:"id and data to be updated is required to update a categoty", data:'', code:400}
        }

         let existCat = await Slide.findOne({_id:id})

        if(!existCat){
            return {error:true, errorMsg:" No Slide exist with the id provide an Valid ID", data:'', code:404}
        }

        await Slide.updateOne({_id:id}, {$set:{...data}})
        let updatedCat = await Slide.findOne({_id:id})
        return {error:false, errorMsg:"", data:updatedCat, code:200}
    }

    async function getAll(){
        let allcat = await Slide.find({})
        if(allcat.length===0){
            return { error:true, errorMsg:"Slide List is Empty", data:allcat, code:200 }
        }
        return { error:false, errorMsg:"", data:allcat, code:200}
    }

    async function getSingle(id:string){
        if(!id){
            return {error:true, errorMsg:"id is required", data:'', code:404}
        }

        let existCat = await Slide.findOne({_id:id})

        if(!existCat){
            return {error:true, errorMsg:" No Slide exist with the id provide an Valid ID", data:'', code:404}
        }

        return { error:false, errorMsg:"", data:existCat, code:200}
    }

    return {
        add, remove, update ,getAll, getSingle
    }
}

export default slideController