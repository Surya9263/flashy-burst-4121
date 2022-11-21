import React,{useEffect} from 'react'
import Router from 'next/router'
import Link from 'next/link'
import {Flex, Text} from "@chakra-ui/react"
import { useAppSelector } from '../../store/hook'

export const adminmenus = [
  {
    id:1,
    name:"Home",
    link:"/admin/"
  },
  {
    id:2,
    name:"Category",
    link:"/admin/category"
  },
  {
    id:3,
    name:"Sub Category",
    link:"/admin/subcategory"
  },
  {
    id:4,
    name:"Product",
    link:"/admin/product"
  },
  {
    id:5,
    name:"Home Slide",
    link:"/admin/slide"
  },
  {
    id:6,
    name:"Users",
    link:"/admin/users"
  }
]
export default function AdminNav() {
  const auth = useAppSelector(store=>store.auth)

  useEffect(()=>{
   if(Router.pathname.startsWith("/admin")){
    if(!auth.isAuth || auth.role!=="admin"){
      Router.push({pathname:'/signin',query:{prevPath:Router.pathname}})
    }
   }
  },[auth])

  return (
    <div>
        <Flex gap="20px" direction={"column"} px="20px">
            
            {adminmenus.map((menu)=>{
              return (
                <Link key={menu.id} href={menu.link}> <Text fontWeight={"700"} border="1px solid #ccc" px="20px" py="10px" _hover={{cursor:"pointer"}}>{menu.name}</Text>  </Link>
              )
            })}
           
        </Flex>
    </div>
  )
}
