import React from 'react';

export default function BlogCard(props) {
  console.log(props?.className);
  
  return (
    <div className={"flex flex-col flex-no-shrink mr-6 px-24 py-8 " + props?.className}>
      <div className="bg-lightp rounded-t-lg p-2">
        <span className="font-serif tracking-tight text-darkp text-4xl sm:text-2xl">{props.post.title}</span>
      </div>
      <div className="bg-white rounded-b-lg p-2">
        <span className="font-serif tracking-tight text-darkp text-2xl sm:text-xl">{props.post.subTitle}</span>
      </div>
    </div>
  )
}
