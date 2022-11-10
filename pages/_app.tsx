import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import {Provider} from 'react-redux'
import store from '../store/store'
import ColorContextProvider from '../context/ColorContext'

export default function App({ Component, pageProps }: AppProps) {

  return  <Provider store={store}>
       
          <ChakraProvider>

            <ColorContextProvider> 
                <Component {...pageProps} />  
            </ColorContextProvider>
          </ChakraProvider>
       
     </Provider> 
    
  
}
