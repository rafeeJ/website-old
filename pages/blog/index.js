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
      <div className='pb-4'>
        <span className='text-2xl sm:text-4xl font-mono'>blog</span>
      </div>
      <div>
        This is a space where I can drop some thoughts
      </div>
      <HeroPost
        title={heroPost.title}
        date={heroPost.date}
        author={heroPost.author}
        slug={heroPost.slug}
        excerpt={heroPost.excerpt}
      />
      <MoreStories posts={morePosts} />
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