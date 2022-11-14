import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React, {createContext, useState,useEffect} from 'react'
import { useAppSelector } from '../store/hook'

export const cartContxt = createContext<any>(null)

export default function CartContxtProvider({children}:{children:React.ReactNode}) {
    const cart = useAppSelector(store=>store.cart)
    
    const updateState = ()=>{
      let remaininfItem = cart.cartItems.filter((item)=>{
        return !item.orderplaced
        })
      setCartItem(remaininfItem.length)
    }

    useEffect(()=>{
      updateState()
    },[cart])
    const [cartItem, setCartItem] =  useState<number>(0)
  return (
    <cartContxt.Provider value={{cartItem, setCartItem, updateState}}>{children} </cartContxt.Provider>
  )
}
