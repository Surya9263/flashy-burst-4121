import {jwt, hashPwd} from '../lib'
import {jwtDecoded, jwtPayload, tokenObj} from '../interface/jwt.interface'
import {User} from '../models'
import { MdRestaurantMenu } from 'react-icons/md'


// Import User Model

function session (){
    
        //  Generating a accessToken and refresh token during login    
        async function getToken(email:string, password:string){
            try{
                const user = await User.findOne({email:email})
            
                if(!user){
                    return {error:true,code:404, errorMsg:"Invalid User Name", data:null}
                }
            
                if(!(await hashPwd().verify(user.password, password)) ){
                    return {error:true,code:401, errorMsg:"Invalid Password", data:null}
                }
                
                const AToken = jwt().signJwt({userId:user._id, role:user.role}, '1h', 'access')   
                const RToken = jwt().signJwt({userId:user._id, role:user.role}, '30d', 'refresh') 
                    await User.updateOne({email:email}, {$set:{rToken:RToken}})
                let decoded = jwt().jwtVerify(AToken, 'access')
                console.log(decoded);
                return {error:false,code:200, errorMsg:"", data:{AToken:AToken, decoded:decoded}}

            }catch(e:any){
                return {error:true,code:500, errorMsg:e.message, data:null}
            }
    }


            async function getReffresh(userId:string, acessToken:string){
                   try{
                      let decoded =  jwt().jwtVerify(acessToken, "access")
                      if(!decoded){
                            let user = await User.findOne({_id:userId})
                        if(jwt().jwtVerify(user.rToken, "refresh")){
                            const AToken = jwt().signJwt({userId:user._id, role:user.role}, '30d', 'access')
                            decoded =  jwt().jwtVerify(AToken, "access")
                            return {error:false,code:200, errorMsg:"", data:{AToken:AToken, decoded:decoded}}
                        }
                       }else{
                        return {error:false,code:200, errorMsg:"", data:{AToken:acessToken, decoded:decoded}}
                      }
                   }
                   catch(e:any){
                    return {error:true,code:500, errorMsg:e.message, data:null}
                   }
            }
    return {getToken, getReffresh}
}

export default session

