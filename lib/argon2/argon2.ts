import argon from 'argon2'



const hashPwd = ()=>{
    
    const hash = async(password:string)=>{
        const hash = await argon.hash(password);
        return hash
    } 
    
    const verify = async(hashedPwd:any, password:string)=>{
        if(await argon.verify(hashedPwd, password)){
                return true;
        }else{
            return false;
        }
    }

    return {
        hash, verify
    }
}


export default hashPwd