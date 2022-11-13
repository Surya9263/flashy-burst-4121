import {User} from "../models"
import { hashPwd } from "../lib";


const userController = ()=>{
    async function add({name, email, password}:{name:string, email:string, password:string}){
        if(!name||!email||!password){
            return { 
                error:true,
                errorMsg:"required fields are missing",
                data:"",
                code:400,
              };
            }      

            let newUser = await User.findOne({email:email})
            if(newUser){
                return { 
                    error:true,
                    errorMsg:"user already exist",
                    data:"",
                    code:409,
                  };
            }
            const hashpassword = await hashPwd().hash(password)
            newUser = await User.create({name:name,email:email,password:hashpassword})
            return {error:false, errorMsg:"", data:newUser, code:200} 
    }

    async function remove(id:string){
        if(!id){
            return { 
                error:true,
                errorMsg:"required field is missing",
                data:"",
                code:400,
                };
         }

         let exitsUse = await User.findOne({_id:id})
         if(!exitsUse){
            return { 
                error:true,
                errorMsg:"incorrect id, user not found",
                data:"",
                code:400,
                };
         }

         
         await User.deleteOne({_id:id})
         return {
            error:false,
            errorMsg:"",
            data:{id: id, msg:"Deleted Successfully"},
            code:200,
          };
    }

    async function update(id:string, password:string){
     console.log(id, password);
     
      
        if(!id||!password){
            return {
                error:true,
                errorMsg:" id or password missing",
                data:"",
                code:400,
                };  
            }

            let exist = await User.findOne({_id:id})

            if(!exist){
                return {
                    error: true,
                    errorMsg: "incorrect id, user not found",
                    data: "",
                    code: 400,
                    };  
                }

             const hashdedPwd =  await hashPwd().hash(password)
             await User.updateOne({_id:id}, {$set:{password:hashdedPwd}})
             let updatedUser =  await User.findOne({_id:id})
            
             return {
                error: false,
                errorMsg: "",
                data: updatedUser,
                code: 200,
                };    
    }

    async function getAll(){
        let allUser = await User.find({})
              
              if (allUser.length === 0) {
                return {
                  error:false,
                  errorMsg: "Users not found",
                  data:allUser,
                  code: 200,
                };
              }
              return { error: false, errorMsg: "", data:allUser, code: 200 };
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

          let existUser = await User.findOne({ _id:id })
          if (!existUser) {
            return {
              error: true,
              errorMsg:
                " No User type exist with the id provide an Valid ID",
              data: "",
              code: 404,
            };
          }

          return { error: false, errorMsg:"", data:existUser, code: 200 };
    }

    return {
        add, remove, update ,getAll, getSingle
    }
}

export default userController