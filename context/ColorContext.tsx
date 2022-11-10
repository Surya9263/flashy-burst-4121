import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React, {createContext, useState} from 'react'

export const colorContext = createContext<any>(null)

export default function ColorContextProvider({children}:{children:React.ReactNode}) {
    const [color, setColor] =  useState("#000")
  return (
    <colorContext.Provider value={{color, setColor}}>{children} </colorContext.Provider>
  )
}
