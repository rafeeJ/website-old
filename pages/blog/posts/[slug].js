import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Layout from '../../../components/Layout'
import MoreStories from '../../../components/MoreStories'
import Tags from '../../../components/Tags'
import SectionSeparator from '../../../components/SectionSeparator'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../../lib/api'
import PostHeader from '../../../components/PostHeader'
import BlogHead from '../../../components/BlogHead'
import Head from 'next/head'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return (<Layout>Something went brokeded</Layout>)
  }

  return (
    <Layout head={BlogHead}>
      


      <div className='pb-4 font-mono'>
        <span className='text-2xl sm:text-4xl font-mono'>blog</span>
      </div>
      <div className='md:px-32 md:py-5'>
        <div className="bg-white rounded-md p-8 shadow">
          {router.isFallback ? (
            <div className='pb-4 font-mono'>
              <span className='text-2xl sm:text-3xl font-mono font-semibold'>Loading</span>
            </div>
          ) : (
            <>
              <article>

              <Head>
        <title>
        Rafee Jenkins | {post?.title} 
        </title>
        {
          post?.featuredImage?.sourceUrl ?
          <meta
          property="og:image"
          content={post.featuredImage?.sourceUrl}
        />:
          <></>
        }
        
        <meta property="og:description" content={post.excerpt} key="desc"/>

      </Head>
                <div className='pb-4 font-mono'>
                  <span className='text-2xl sm:text-3xl font-mono font-semibold'>{post?.title}</span>
                </div>
                <PostHeader
                  displayImage={post?.featuredImage}
                  date={post?.date}
                  author={post?.author}
                  categories={post?.categories}
                />
                <div
                  className=''
                  dangerouslySetInnerHTML={{ __html: post?.content }}
                />




                <footer>
                  {post?.tags.edges.length > 0 && <Tags tags={post?.tags} />}
                </footer>
              </article>

              <SectionSeparator />
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </div>
      </div>
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