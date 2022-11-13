import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios,{AxiosResponse} from 'axios'
import { CIcart, initialState } from "../../interface/client/cart.interface";
import { ICatRem } from "../../interface/client/category.interface";


export const addToCart = createAsyncThunk(
    'cart/add',
        async(data:{prodId:string,prodCount:number,color:string,size:string,userId:string,price:number}, thunkapi)=>{
            try{
                const res:AxiosResponse<CIcart> = await axios.post('/api/cart',data)
                // console.log(res.data);
                
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)


export const getUserCartItems = createAsyncThunk(
    'cart/getUserCartItems',
        async(userId:string, thunkapi)=>{
            try{
                const res:AxiosResponse<Array<CIcart>> = await axios.get('/api/cart',{
                    data:{userId}
                })    
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)

export const getAllCartItems = createAsyncThunk(
    'cart/getAllCartItems',
        async(name:string, thunkapi)=>{
            try{
                const res:AxiosResponse<Array<CIcart>> = await axios.get('/api/cart')    
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)


export const deleteCartItem = createAsyncThunk(
    'cart/delete',
        async(id:string, thunkapi)=>{
            try{
                const res:AxiosResponse<ICatRem> = await axios.delete(`/api/cart/${id}`)    
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)

export const updateCartItemCount = createAsyncThunk(
    'category/update',
        async({id, count}:{id:string, count:any}, thunkapi)=>{
            try{
                const res:AxiosResponse<CIcart> = await axios.patch(`/api/cart/${id}`, {
                    count:count
                })    
                return res.data
            }catch(e:any){  
                return thunkapi.rejectWithValue(e.message)
            }
        }
)


const initialState:initialState  = {
    error:false,
    loading:false,
    errorMsg:"",
    cartItems:[]
}

const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        clearCart:(state)=>{
            state.error = false,
            state.loading = false,
            state.errorMsg = "",
            state.cartItems = []
        }
    },
    extraReducers(builder) {
        builder.addCase(addToCart.pending, (state, action)=>{
            state.error =false;
            state.loading = true;
            state.errorMsg = "";
        })
        .addCase(addToCart.rejected, (state, action:PayloadAction<any>)=>{
            state.error = true;
            state.loading = false;
            state.errorMsg = action.payload;
        })
        .addCase(addToCart.fulfilled, (state, action:PayloadAction<CIcart>)=>{
            state.error = false;
            state.loading = false;
            state.errorMsg = "";
            state.cartItems = [...state.cartItems, action.payload]
        })
        .addCase(getUserCartItems.pending, (state, action)=>{
            state.error = false;
            state.loading = true;
            state.errorMsg = "";
        })
        .addCase(getUserCartItems.rejected, (state, action:PayloadAction<any>)=>{
            state.error = true;
            state.loading = false;
            state.errorMsg = action.payload;
        })
        .addCase(getUserCartItems.fulfilled, (state, action:PayloadAction<Array<CIcart>>)=>{
            state.error = false;
            state.loading = false;
            state.errorMsg = "";
            state.cartItems = action.payload;
        })
        .addCase(deleteCartItem.pending, (state, action)=>{
            state.error = false;
            state.loading = true;
            state.errorMsg = "";
        })
        .addCase(deleteCartItem.rejected, (state, action:PayloadAction<any>)=>{
            state.error = true;
            state.loading = false;
            state.errorMsg = action.payload;
        })
        .addCase(deleteCartItem.fulfilled, (state, action:PayloadAction<ICatRem>)=>{
            state.error = false;
            state.loading = false;
            state.errorMsg = "";
            state.cartItems = state.cartItems.filter((cartItem)=>{
                    return cartItem._id!==action.payload.id
            })

        })
        .addCase(updateCartItemCount.pending, (state, action)=>{
            state.error = false;
            state.loading = true;
            state.errorMsg = "";
        })
        .addCase(updateCartItemCount.rejected, (state, action:PayloadAction<any>)=>{
            state.error = true;
            state.loading = false;
            state.errorMsg = action.payload;
        })
        .addCase(updateCartItemCount.fulfilled, (state, action:PayloadAction<CIcart>)=>{
            state.error = false;
            state.loading = false;
            state.errorMsg = "";
            state.cartItems = state.cartItems.map((cartItem)=>{
                    
                if(cartItem._id===action.payload._id){
                    return action.payload;
                }else{
                    return cartItem;
                }
        })
        })
    },
})


export const {clearCart}  =  cartSlice.actions;
export default cartSlice.reducer;