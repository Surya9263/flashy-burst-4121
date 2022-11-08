import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosResponse} from 'axios'
import { CIcategory, initialState } from "../../interface/client/category.interface";


export const addCategory = createAsyncThunk(
    'category/add',
        async(name:string, thunkapi)=>{
            try{
                const res:AxiosResponse<CIcategory> = await axios.post('/api/category', {
                    name:name
                })
                         
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)


const initialState:initialState  = {
    isErro:false,
    isLoading:false,
    errorMsg:"",
    categories:[]
}



const categorySlice = createSlice({
    name:'caregoryslice',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(addCategory.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })
        .addCase(addCategory.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload.errorMsg;
        })
        .addCase(addCategory.fulfilled, (state, action:PayloadAction<CIcategory>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.categories = [...state.categories, action.payload]
        })
    },
})



export default categorySlice.reducer