import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../../components/Layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../../lib/api'

export default function Post({ post }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return ( <Layout> fuck somethign broke</Layout>)
      }
  return (
    <Layout>
        <div>{post.title}</div>
        <div>{post.content}</div>
    </Layout>
  )
}

export const getStaticProps = async ({
    params,
    preview = false,
    previewData,
  }) => {
    const data = await getPostAndMorePosts(params?.slug, preview, previewData)
  
    return {
      props: {
        preview,
        post: data.post,
        posts: data.posts,
      },
      revalidate: 10,
    }
  }

export const getStaticPaths = async () => {
    const allPosts = await getAllPostsWithSlug()
  
    return {
      paths: allPosts.edges.map(({ node }) => `/blog/posts/${node.slug}`) || [],
      fallback: true,
    }
  }