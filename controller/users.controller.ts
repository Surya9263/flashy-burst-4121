
import { connectDB } from '../lib'
import {Iuser} from '../interface/interface'


const userController = ()=>{
    async function add({name, email, password}:{name:string, email:string, password:string}){
        
    }
    async function remove(){

    }
    async function update(){

    }
    async function getAll(){

    }
    async function getSingle(){

    }

    return {
        add, remove, update ,getAll, getSingle
    }
}

export default userController