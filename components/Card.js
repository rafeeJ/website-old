import React from 'react';
import Link from 'next/link'

export default function BlogCard(props) {
  console.log('props are:');
  console.log(props);
  return (
    <Link href={`blog/${props?.post?.stub}`}>
    <div className={"flex flex-col flex-no-shrink " + props?.className}>
      <div className="bg-lightp rounded-t-lg p-2">
        <span className="font-serif tracking-tight text-darkp text-4xl sm:text-2xl">{props?.post?.title}</span>
      </div>
      <div className="bg-white rounded-b-lg p-2">
        <span className="font-serif tracking-tight text-darkp text-2xl sm:text-xl">{props?.post?.subTitle}</span>
      </div>
    </div>
    </Link>
  )
}
