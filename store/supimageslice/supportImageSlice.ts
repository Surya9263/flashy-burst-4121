import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosResponse} from 'axios'
import { ICatRem } from "../../interface/client/category.interface";
import { IpType, IproTypeInitState} from "../../interface/client/productType";


export const addProdType = createAsyncThunk(
    'productType/add',
        async(data:{catid:string, typename:string}, thunkapi)=>{
            try{
                const res:AxiosResponse<IpType> = await axios.post('/api/producttype', data)
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)

export const getAllProdType = createAsyncThunk(
    'productType/getall',
        async(name:string, thunkapi)=>{
            try{
                const res:AxiosResponse<Array<IpType>> = await axios.get('/api/producttype')                    
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)


    export const deleteProductType = createAsyncThunk(
        'productType/delete',
            async(id:string, thunkapi)=>{
                try{
                    const res:AxiosResponse<ICatRem> = await axios.delete(`/api/producttype/${id}`)    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )

    export const getSingleSlide = createAsyncThunk(
        'productType/getone',
            async(id:string, thunkapi)=>{
                try{
                    const res:AxiosResponse<IpType> = await axios.get(`/api/producttype/${id}`)    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )


    export const updateProdType = createAsyncThunk(
        'productType/update',
            async({id, data}:{id:string, data:any}, thunkapi)=>{
                try{
                    const res:AxiosResponse<IpType> = await axios.patch(`/api/slide/${id}`, data)    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )


    const initialState:IproTypeInitState ={
        isLoading:false,
        isErro:false,
        errorMsg:"",
        productTypes:[]
    }



   
const supImageSlice = createSlice({
    name:'slidereducer',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(addProdType.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })
        .addCase(addProdType.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload
        })
        .addCase(addProdType.fulfilled, (state, action:PayloadAction<IpType>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.productTypes = [...state.productTypes, action.payload]
        })
        .addCase(getAllProdType.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })

        .addCase(getAllProdType.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(getAllProdType.fulfilled, (state, action:PayloadAction<Array<IpType>>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.productTypes = action.payload
        })
        .addCase(deleteProductType.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })

        .addCase(deleteProductType.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(deleteProductType.fulfilled, (state, action:PayloadAction<ICatRem>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.productTypes = state.productTypes.filter((slide)=>{
                return slide._id!==action.payload.id
            })       
        })
        .addCase(updateProdType.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })

        .addCase(updateProdType.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(updateProdType.fulfilled, (state, action:PayloadAction<IpType>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.productTypes = state.productTypes.map((slide)=>{
                if(slide._id===action.payload._id){
                        return action.payload
                }else{
                    return slide
                }
               
            })       
        })
    },
}) 

// 

export default supImageSlice.reducer