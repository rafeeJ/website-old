import React from 'react';
import Link from 'next/link'

export default function BlogCard(props) {
  return (
    <div className='bg-white rounded-md p-8 shadow'>
      {title ? <div className='text-2xl font-merri pb-4'>{props.title}</div> : <></>}
      
      <div className='flex flex-col md:flex-row'>{props.children}</div>
    </div>
  )
}
