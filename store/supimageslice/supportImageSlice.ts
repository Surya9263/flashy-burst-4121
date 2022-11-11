import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosResponse} from 'axios'
import { ICatRem } from "../../interface/client/category.interface";
import { IsupImage, IsupImgInitState} from "../../interface/client/supportingImage.interface";


export const addSupImg = createAsyncThunk(
    'suportImg/add',
        async(data:{prodid:string, imglink:string}, thunkapi)=>{
            try{
                const res:AxiosResponse<IsupImage> = await axios.post('/api/supimage', data)
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)

export const getAllSupImage = createAsyncThunk(
    'suportImg/getall',
        async(name:string, thunkapi)=>{
            try{
                const res:AxiosResponse<Array<IsupImage>> = await axios.get('/api/supimage')                    
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)


    export const deleteSupImage = createAsyncThunk(
        'suportImg/delete',
            async(id:string, thunkapi)=>{
                try{
                    const res:AxiosResponse<ICatRem> = await axios.delete(`/api/supimage/${id}`)    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )

    export const getSingleSupImg = createAsyncThunk(
        'suportImg/getone',
            async(id:string, thunkapi)=>{
                try{
                    const res:AxiosResponse<IsupImage> = await axios.get(`/api/supimage/${id}`)    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )


    export const updateSupImg = createAsyncThunk(
        'suportImg/update',
            async({id, data}:{id:string, data:any}, thunkapi)=>{
                try{
                    const res:AxiosResponse<IsupImage> = await axios.patch(`/api/supimage/${id}`, data)    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )


    const initialState:IsupImgInitState ={
        isLoading:false,
        isErro:false,
        errorMsg:"",
        images:[]
    }



   
const supImageSlice = createSlice({
    name:'supimageReducer',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(addSupImg.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })
        .addCase(addSupImg.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload
        })
        .addCase(addSupImg.fulfilled, (state, action:PayloadAction<IsupImage>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.images = [...state.images, action.payload]
        })
        .addCase(getAllSupImage.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })

        .addCase(getAllSupImage.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(getAllSupImage.fulfilled, (state, action:PayloadAction<Array<IsupImage>>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.images = action.payload
        })
        .addCase(deleteSupImage.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })

        .addCase(deleteSupImage.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(deleteSupImage.fulfilled, (state, action:PayloadAction<ICatRem>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.images = state.images.filter((slide)=>{
                return slide._id!==action.payload.id
            })       
        })
        .addCase(updateSupImg.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })

        .addCase(updateSupImg.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(updateSupImg.fulfilled, (state, action:PayloadAction<IsupImage>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.images = state.images.map((slide)=>{
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