import Cart from "../components/cart/cart";

const cartController=()=>{
    async function add(id:String){
        if(!id){
            return { 
                error: true,
                errorMsg: "required fields are missing",
                data: "",
                code: 400,
              }; 
        }
        const newProd=await Cart
    }
}

export default cartController