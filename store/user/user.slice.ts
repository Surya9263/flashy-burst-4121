import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosResponse} from 'axios'

import {ICatRem, IsubCatInitState} from '../../interface/client/category.interface'
import { Iuserclient, Iuserstate } from "../../interface/client/user.interface";



export const adduser = createAsyncThunk(
    'user/add',
        async(data:{name:string, email:string, password:string}, thunkapi)=>{
            try{
                const res:AxiosResponse<Iuserclient> = await axios.post('/api/user', data)
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)

export const getAlluser = createAsyncThunk(
    'usre/getall',
        async(name:string, thunkapi)=>{
            try{
                const res:AxiosResponse<Array<Iuserclient>> = await axios.get('/api/user') 
                                  
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)

export const getAuthSUer = createAsyncThunk(
    'usre/getAuthUser',
        async(id:string, thunkapi)=>{
            try{
                const res:AxiosResponse<Iuserclient> = await axios.get(`/api/user/${id}`) 
                                  
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)


    export const deletuser = createAsyncThunk(
        'user/delete',
            async(id:string, thunkapi)=>{
                try{
                    const res:AxiosResponse<ICatRem> = await axios.delete(`/api/user/${id}`)    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )

    export const getSingleSlide = createAsyncThunk(
        'user/getone',
            async(id:string, thunkapi)=>{
                try{
                    const res:AxiosResponse<Iuserclient> = await axios.get(`/api/user/${id}`)    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )


    export const updateuser = createAsyncThunk(
        'user/update',
            async({id, password}:{id:string, password:any}, thunkapi)=>{
                try{
                    const res:AxiosResponse<Iuserclient> = await axios.patch(`/api/user/${id}`, {
                        id:id,password:password
                    })    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )


    const initialState:Iuserstate ={
        isLoading:false,
        isError:false,
        errormsg:"",
        users:[],
        authUser:{
            _id:"",
            role:"",
            name:"",
            email:""
        }        
    }



   
const userSlice = createSlice({
    name:'subcategoryScice',
    initialState,
    reducers:{
        
    },
    extraReducers(builder) {
        builder.addCase(adduser.pending, (state, action)=>{
            state.isError =false;
            state.isLoading = true;
            state.errormsg = "";
        })
        .addCase(adduser.rejected, (state, action:PayloadAction<any>)=>{
            state.isError = true;
            state.isLoading = false;
            state.errormsg = action.payload
        })
        .addCase(adduser.fulfilled, (state, action:PayloadAction<Iuserclient>)=>{
            state.isError = false;
            state.isLoading = false;
            state.errormsg = "";
            state.users = [...state.users, action.payload]
        })
        .addCase(getAuthSUer.pending, (state, action)=>{
            state.isError =false;
            state.isLoading = true;
            state.errormsg = "";
        })
        .addCase(getAuthSUer.rejected, (state, action:PayloadAction<any>)=>{
            state.isError = true;
            state.isLoading = false;
            state.errormsg = action.payload
        })
        .addCase(getAuthSUer.fulfilled, (state, action:PayloadAction<Iuserclient>)=>{
            state.isError = false;
            state.isLoading = false;
            state.errormsg = "";
            state.authUser = action.payload
        })
        .addCase(getAlluser.pending, (state, action)=>{
            state.isError =false;
            state.isLoading = true;
            state.errormsg = "";
        })

        .addCase(getAlluser.rejected, (state, action:PayloadAction<any>)=>{
            state.isError = true;
            state.isLoading = false;
            state.errormsg = action.payload;
        })
        .addCase(getAlluser.fulfilled, (state, action:PayloadAction<Array<Iuserclient>>)=>{
            state.isError = false;
            state.isLoading = false;
            state.errormsg = "";
            state.users = action.payload
        })
        .addCase(deletuser.pending, (state, action)=>{
            state.isError =false;
            state.isLoading = true;
            state.errormsg = "";
        })

        .addCase(deletuser.rejected, (state, action:PayloadAction<any>)=>{
            state.isError = true;
            state.isLoading = false;
            state.errormsg = action.payload;
        })
        .addCase(deletuser.fulfilled, (state, action:PayloadAction<ICatRem>)=>{
            state.isError = false;
            state.isLoading = false;
            state.errormsg = "";
            state.users = state.users.filter((user)=>{
                return user._id!==action.payload.id
            })       
        })
        .addCase(updateuser.pending, (state, action)=>{
            state.isError =false;
            state.isLoading = true;
            state.errormsg = "";
        })

        .addCase(updateuser.rejected, (state, action:PayloadAction<any>)=>{
            state.isError = true;
            state.isLoading = false;
            state.errormsg = action.payload;
        })
        .addCase(updateuser.fulfilled, (state, action:PayloadAction<Iuserclient>)=>{
            state.isError = false;
            state.isLoading = false;
            state.errormsg = "";
            state.users = state.users.map((user)=>{
                if(user._id===action.payload._id){
                        return action.payload
                }else{
                    return user
                }
               
            })       
        })
    },
}) 

// 

export default userSlice.reducer