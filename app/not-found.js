import React from 'react'
import Link from 'next/link'
const NotFound = () => {
  return (
    <div>
        <h1 className="">This page cannot be found</h1>
        <Link href={"/"}>Go to  home</Link>

    </div>
  )
}

export default NotFound