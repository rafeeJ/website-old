import Image from 'next/image'
import React from 'react'

export default function Avatar({ author }) {
    const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null

    const myLoader=({src})=>{
      return src
    }

  return (
    <div className="flex items-center font-mono">
      <div className="w-12 h-12 relative mr-4">
        <Image
        loader={myLoader}
          src={author.node.avatar.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">Written by {name}</div>
    </div>
  )
}
