import React from 'react'
import Card from '../../components/Card'
import HeroPost from '../../components/HeroPost'
import Layout from '../../components/Layout'
import MoreStories from '../../components/MoreStories'
import { getAllPostsForHome } from '../../lib/api'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <Layout>
      <div className='pb-4 font-mono'>
        <span className='text-2xl sm:text-4xl font-mono'>blog</span>
      </div>
      <div className='font-mono mb-4'>
        This is a space where I can drop some thoughts
      </div>
      <div className='md:px-32 md:py-5'>
      <HeroPost
        title={heroPost.title}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slug}
        excerpt={heroPost.excerpt}
        coverImage={heroPost.featuredImage}
      />
      <div className='my-4'>
      <MoreStories posts={morePosts} />

      </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  var preview = false
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 10
  }
}