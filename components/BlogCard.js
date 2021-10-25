import React from 'react';

export default function BlogCard(props) {
    console.log(props);
  return (
      <div className="flex items-center flex-no-shrink text-white mr-6 bg-black">
        <span className="font-serif tracking-tight text-darkp text-2xl sm:text-4xl">{props.post.title}</span>
        <span className="font-serif tracking-tight text-darkp text-2xl sm:text-2xl">{props.post.subTitle}</span>
      </div>
  )
}
