import React from 'react'
import Router from 'next/router'
import { useAppSelector } from '../../store/hook'
import { SingleProduct } from '../../components/client'
import { CIproduct } from '../../interface/client/product.interface'
import { GetServerSideProps } from 'next'
import axios, { AxiosResponse } from 'axios'
import { ClientNavbar, Footer } from '../../components'
import { Box } from '@chakra-ui/react'

export default function ProductId() {
    const id = Router.query.id as string
    const products = useAppSelector(store=>store.product)
    const product = products.products.find(product=>product?._id===id) as CIproduct
  return (
    <div>
        <ClientNavbar />
        <Box mt="100px">
         
        </Box>
        <SingleProduct product={product}/>
        <Footer/>
    </div>
  )
}



// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const url = process.env.BASEURL
//     console.log(context.params);
    
//     const res:AxiosResponse<CIproduct> = await axios.get(`${url}${context?.params?.id}`)
//     const product = res.data  
//     return {
//       props: {
//         product,
//       },
//     }
//   }