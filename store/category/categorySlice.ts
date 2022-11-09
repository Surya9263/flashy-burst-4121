import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosResponse} from 'axios'
import { CIcategory, ICatRem, initialState } from "../../interface/client/category.interface";


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


export const getallCategory = createAsyncThunk(
    'category/getall',
        async(name:string, thunkapi)=>{
           
            console.log("inside getFunc");
            try{
                const res:AxiosResponse<Array<CIcategory>> = await axios.get('/api/category')    
                console.log(res.data);
                 
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)

export const deleteCategory = createAsyncThunk(
    'category/delete',
        async(id:string, thunkapi)=>{
            try{
                const res:AxiosResponse<ICatRem> = await axios.delete(`/api/category/${id}`)    
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
        .addCase(getallCategory.pending, (state, action)=>{
            state.isErro = false;
            state.isLoading = true;
            state.errorMsg = "";
        })
        .addCase(getallCategory.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(getallCategory.fulfilled, (state, action:PayloadAction<Array<CIcategory>>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.categories = action.payload;
        })
        .addCase(deleteCategory.pending, (state, action)=>{
            state.isErro = false;
            state.isLoading = true;
            state.errorMsg = "";
        })
        .addCase(deleteCategory.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(deleteCategory.fulfilled, (state, action:PayloadAction<ICatRem>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.categories = state.categories.filter((category)=>{
                    return category._id!==action.payload.id
            })

        })
    },
})



export default categorySlice.reducer