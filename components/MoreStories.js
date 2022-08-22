import React from 'react'
import PostPreview from './PostPreview'

export default function MoreStories({ posts }) {
  return (
    <section>
        
    <span className='text-2xl md:text-4xl font-mono my-4'>More Posts</span>
      
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-4 md:gap-y-32 mb-4">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
