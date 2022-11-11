import jwt from "jsonwebtoken"
import config from '../locals/config'
import {jwtPayload, jwtDecoded, jwtstatus} from '../../interface/jwt.interface'


const jsonWT = ()=>{
   
    // function to create a jwt token 
    function signJwt(payload:jwtPayload, exp:string|number, tType:'access'|'refresh'){
        let token = ""
        
        if(tType==="access"){
            token = jwt.sign(payload, config().jwtPkey as string, {expiresIn:exp})
        }   

        if(tType==="refresh"){
            token = jwt.sign(payload, config().jwtOkey as string, {expiresIn:exp})
        }

        return token;
    }


    // function to decode the jwt token
    function jwtVerify(token:string, tType:'access'|'refresh'){
       
        // let decoded:jwtDecoded = {userId:"", role:"", iat:0, exp:0}
        
        // // let decodedStaus:jwtstatus = {
        // //     decoded:decoded,
        // //     status: false,
        // //     errmsg: '',
        // // }
        let decodedStaus = {} as jwtDecoded ;

       try{
            if(tType==="access"){
                decodedStaus = jwt.verify(token, config().jwtPkey||"") as jwtDecoded
                
            }   

            if(tType==="refresh"){
                decodedStaus = jwt.verify(token, config().jwtOkey as string) as jwtDecoded
            }

            return decodedStaus
       }
       catch(e:any){
            return {status:false,  errmsg:e.message} ;
       }

    }

    return {
        signJwt,
        jwtVerify
    }
}



export default jsonWT