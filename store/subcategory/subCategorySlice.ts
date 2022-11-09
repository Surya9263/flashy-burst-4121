import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosResponse} from 'axios'

import {ICatRem, IsubCategory, IsubCatInitState} from '../../interface/client/category.interface'



export const addsubcategory = createAsyncThunk(
    'subcategory/add',
        async(data:{name:string, cat:string}, thunkapi)=>{
            try{
                const res:AxiosResponse<IsubCategory> = await axios.post('/api/subcategory', data)
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)

export const getAllsubcategory = createAsyncThunk(
    'subcategory/getall',
        async({}, thunkapi)=>{
            try{
                const res:AxiosResponse<Array<IsubCategory>> = await axios.get('/api/subcategory')                    
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)


    export const deletsubcategory = createAsyncThunk(
        'subcategory/delete',
            async(id:string, thunkapi)=>{
                try{
                    const res:AxiosResponse<ICatRem> = await axios.delete(`/api/subcategory/${id}`)    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )

    export const getSingleSlide = createAsyncThunk(
        'subcategory/getone',
            async(id:string, thunkapi)=>{
                try{
                    const res:AxiosResponse<IsubCategory> = await axios.get(`/api/subcategory/${id}`)    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )


    export const updatesubcategory = createAsyncThunk(
        'subcategory/update',
            async({id, data}:{id:string, data:any}, thunkapi)=>{
                try{
                    const res:AxiosResponse<IsubCategory> = await axios.patch(`/api/subcategory/${id}`, data)    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )


    const initialState:IsubCatInitState ={
        isLoading:false,
        isErro:false,
        errorMsg:"",
        subcategories:[]
    }



   
const categorySlice = createSlice({
    name:'slidereducer',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(addsubcategory.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })
        .addCase(addsubcategory.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload
        })
        .addCase(addsubcategory.fulfilled, (state, action:PayloadAction<IsubCategory>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.subcategories = [...state.subcategories, action.payload]
        })
        .addCase(getAllsubcategory.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })

        .addCase(getAllsubcategory.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(getAllsubcategory.fulfilled, (state, action:PayloadAction<Array<IsubCategory>>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.subcategories = action.payload
        })
        .addCase(deletsubcategory.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })

        .addCase(deletsubcategory.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(deletsubcategory.fulfilled, (state, action:PayloadAction<ICatRem>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.subcategories = state.subcategories.filter((subcategory)=>{
                return subcategory._id!==action.payload.id
            })       
        })
        .addCase(updatesubcategory.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })

        .addCase(updatesubcategory.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(updatesubcategory.fulfilled, (state, action:PayloadAction<IsubCategory>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.subcategories = state.subcategories.map((subcategory)=>{
                if(subcategory._id===action.payload._id){
                        return action.payload
                }else{
                    return subcategory
                }
               
            })       
        })
    },
}) 

// 

export default categorySlice.reducer