import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React, {createContext, useState} from 'react'
import { useAppSelector } from '../store/hook'

export const cartContxt = createContext<any>(null)

export default function CartContxtProvider({children}:{children:React.ReactNode}) {
    const cart = useAppSelector(store=>store.cart)
    const [cartItem, setCartItem] =  useState<number>(0)
  return (
    <cartContxt.Provider value={{cartItem, setCartItem}}>{children} </cartContxt.Provider>
  )
}
