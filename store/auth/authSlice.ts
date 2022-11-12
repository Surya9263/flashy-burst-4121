import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import { Iauthclient, Iuserclient } from "../../interface/client/user.interface";
import { jwtDecoded } from "../../interface/jwt.interface";
// import { userSliceState, userType,authStateSliceType, authResType } from "../types/types";

export interface AxiosResData  {
    data:jwtDecoded;
}
// login action 
export const login = createAsyncThunk(
    "users/auth/login",
    async(data:{email:string, password:string}, thunkApi)=>{
        try{
            const responce = await axios.post<AxiosResData>("/api/session", data)        
            return responce.data
        }catch(error:any){
            return thunkApi.rejectWithValue(error.message);
        }
    }
)



const initialState: Iauthclient = {
    isLoading:false,
    isError:false,
    isAuth:false,
    userId:"",
    iat:0,
    ext:0,
    role:"",
}

const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        
    },
    extraReducers(builder) {
        builder.addCase(login.pending,(state,action)=>{
            state.isLoading=true;
            state.isError = false;
        })
        .addCase(login.fulfilled,(state, action:PayloadAction<AxiosResData>)=>{
            console.log(action.payload);
            
             state.isLoading=false,
             state.isAuth = true,
             state.isError = false;
             state.userId=action.payload.data.userId,
             state.iat=action.payload.data.iat,
             state.ext=action.payload.data.exp,
             state.role=action.payload.data.role
             
        })
        .addCase(login.rejected, (state, action:PayloadAction<any>)=>{
            state.isLoading=false,
            state.isAuth = false,
            state.isError = true,
            state.userId="",
            state.iat=0,
            state.ext=0,
            state.role=""
        })
        
    }
})

export default authSlice.reducer