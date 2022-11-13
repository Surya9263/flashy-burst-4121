import {Cart, User} from "../models/";

const cartController=()=>{
    async function add({prodId,prodCount,color,size,userId,price}:{prodId:string,prodCount:number,color:string,size:string,userId:string,price:number}){
        if(!prodId || !prodCount || !color || !size || !userId || !price){
            return { 
                error: true,
                errorMsg: "required fields are missing",
                data: "",
                code: 400,
              }; 
        }
        let newCartItem=await Cart.findOne({prodId});
        if(newCartItem){
            return {
                error: true,
                errorMsg: "product already added",
                data: "",
                code: 409,
            }
        }
        newCartItem=new Cart({prodId,prodCount,color,size,userId,price})
        let data=await newCartItem.save();
        newCartItem=await Cart.findById({_id:data._id}).populate("prodId");
        await User.updateOne({_id:newCartItem.userId}, {$push:{cart:newCartItem._id}})
        return{
            error: false,
            errorMsg: "",
            data:newCartItem ,
            code: 200,
        }
    }
    async function remove(cartId:string){
        if(!cartId){
            return { 
                error: true,
                errorMsg: "required fields are missing",
                data: "",
                code: 400,
              };
        }
        let existCartItem=await Cart.findById({_id:cartId});
        if(!existCartItem){
            return{
                error: true,
                errorMsg: "product not found",
                data: "",
                code: 404,
            }
        }
        await Cart.findByIdAndDelete({_id:cartId})
        return{
            error: false,
            errorMsg: "",
            data:{id:cartId,msg:"item deleted"} ,
            code: 200,
        }
    }
    async function updateProdCount(cartId:string,count:number){
        if(!cartId){
            return { 
                error: true,
                errorMsg: "required fields are missing",
                data: "",
                code: 400,
              };
        }
        await Cart.findByIdAndUpdate({_id:cartId},{$set:{prodCount:count}})
        let updatedCart=await Cart.findById({_id:cartId}).populate("prodId");
        return{
            error: false,
            errorMsg: "",
            data:updatedCart ,
            code: 200,
        }
    }
    async function getAll(){
        let allCartItems=await Cart.find({}).populate("prodId")
        return{
            error: false,
            errorMsg: "",
            data:allCartItems ,
            code: 200,
        }
    }
    async function getSingle(userId:string){
        if(!userId){
            return { 
                error: true,
                errorMsg: "required fields are missing",
                data: "",
                code: 400,
              };
        }

        
        let userCartItems=await Cart.find({userId:userId}).populate("prodId");
        return{
            error: false,
            errorMsg: "",
            data:userCartItems ,
            code: 200,
        }
    }

    async function orderPlaced(userId:string){
        if(!userId){
            return { 
                error: true,
                errorMsg: "required fields are missing",
                data: "",
                code: 400,
              };
        }
        let updated = await Cart.updateMany({userId:userId}, {$set:{orderplaced:true}})      
        return{
            error: false,
            errorMsg: "",
            data:"Order placed Successfully",
            code: 200,
        }
    }


    return {
        add, remove, updateProdCount ,getAll, getSingle, orderPlaced
    }
}

export default cartController