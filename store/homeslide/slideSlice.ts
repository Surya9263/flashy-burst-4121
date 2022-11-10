import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosResponse} from 'axios'
import { ICatRem } from "../../interface/client/category.interface";
import {Islide} from '../../interface/client/slides'
import { ISlideInitState } from "../../interface/client/slides";

export const addSlide = createAsyncThunk(
    'slides/add',
        async(data:{catid:string, subcatid:string,urltype:string, imgurl:string, navurl:string}, thunkapi)=>{
            try{
                const res:AxiosResponse<Islide> = await axios.post('/api/slide', data)
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)

export const getAllSlides = createAsyncThunk(
    'slides/getall',
        async(name:string, thunkapi)=>{
            try{
                const res:AxiosResponse<Array<Islide>> = await axios.get('/api/slide')                    
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)


    export const deletSlide = createAsyncThunk(
        'slide/delete',
            async(id:string, thunkapi)=>{
                try{
                    const res:AxiosResponse<ICatRem> = await axios.delete(`/api/slide/${id}`)    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )

    export const getSingleSlide = createAsyncThunk(
        'slide/getone',
            async(id:string, thunkapi)=>{
                try{
                    const res:AxiosResponse<Islide> = await axios.get(`/api/slide/${id}`)    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )


    export const updateSlide = createAsyncThunk(
        'slide/update',
            async({id, data}:{id:string, data:any}, thunkapi)=>{
                try{
                    const res:AxiosResponse<Islide> = await axios.patch(`/api/slide/${id}`, {
                        data:data
                    })    
                    return res.data
                }catch(e:any){  
                    return thunkapi.rejectWithValue(e.message)
                }
            }
    )


    const initialState:ISlideInitState ={
        isLoading:false,
        isErro:false,
        errorMsg:"",
        slides:[]
    }



   
const categorySlice = createSlice({
    name:'slidereducer',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(addSlide.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })
        .addCase(addSlide.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload
        })
        .addCase(addSlide.fulfilled, (state, action:PayloadAction<Islide>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.slides = [...state.slides, action.payload]
        })
        .addCase(getAllSlides.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })

        .addCase(getAllSlides.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(getAllSlides.fulfilled, (state, action:PayloadAction<Array<Islide>>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.slides = action.payload
        })
        .addCase(deletSlide.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })

        .addCase(deletSlide.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(deletSlide.fulfilled, (state, action:PayloadAction<ICatRem>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.slides = state.slides.filter((slide)=>{
                return slide._id!==action.payload.id
            })       
        })
        .addCase(updateSlide.pending, (state, action)=>{
            state.isErro =false;
            state.isLoading = true;
            state.errorMsg = "";
        })

        .addCase(updateSlide.rejected, (state, action:PayloadAction<any>)=>{
            state.isErro = true;
            state.isLoading = false;
            state.errorMsg = action.payload;
        })
        .addCase(updateSlide.fulfilled, (state, action:PayloadAction<Islide>)=>{
            state.isErro = false;
            state.isLoading = false;
            state.errorMsg = "";
            state.slides = state.slides.map((slide)=>{
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

export default categorySlice.reducer