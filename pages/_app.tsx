import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {useEffect} from 'react'
import {Provider} from 'react-redux'
import store from '../store/store'
import ColorContextProvider from '../context/ColorContext'
import CartContxtProvider from '../context/CartCItemContext'
import Router from 'next/router'
import { useAppSelector } from '../store/hook'

export default function App({ Component, pageProps }: AppProps) {
 

 
  return  <Provider store={store}>
       
          <ChakraProvider>
      
            <ColorContextProvider> 
          
               <CartContxtProvider>
                  <Component {...pageProps} />  
               </CartContxtProvider>
             
            </ColorContextProvider>
      
          </ChakraProvider>
       
     </Provider> 
    
  
}
