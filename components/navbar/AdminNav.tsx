import React from 'react'
import Link from 'next/link'
import {Flex, Text} from "@chakra-ui/react"

export const adminmenus = [
  {
    id:1,
    name:"Home",
    link:"/admin/"
  },
  {
    id:1,
    name:"Category",
    link:"/admin/category"
  },
  {
    id:1,
    name:"Sub Category",
    link:"/admin/subcategory"
  },
  {
    id:1,
    name:"Product",
    link:"/admin/product"
  },
  {
    id:1,
    name:"Home Slide",
    link:"/admin/slide"
  }
]
export default function AdminNav() {
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
