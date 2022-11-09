import React from 'react'
import Link from 'next/link'
import {Flex} from "@chakra-ui/react"
export default function AdminNav() {
  return (
    <div>
        <Flex gap="20px">
            <Link href={'/admin/category'}> Category </Link>
            <Link href={'/admin/subcategory'}> Subcategory </Link>
            <Link href={'/admin/product'}> Product </Link>
        </Flex>
    </div>
  )
}
