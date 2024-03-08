import Link from 'next/link'
import React from 'react'

export default function Verticalmodal() {
  return (
    <>
    <div className='text-center p-2'>
    <Link href="/checkout">
      <button className='btn btn-outline-success'> Finalizing Your Order</button>
    </Link>
    </div>
    </>
  )
}
