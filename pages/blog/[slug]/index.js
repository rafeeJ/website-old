import { Card } from '@mui/material'
import dayjs from 'dayjs'
import { logEvent } from 'firebase/analytics'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import Layout from '../../../components/Layout'
import { analytics } from '../../../firebase/clientApp'
import me from '../../../public/me.png'
import YouTube from '../../../components/YouTube'
import { getArticleFromSlug, getSlug } from '../../../src/utils/mdx'

export default function Blog({ post: { source, frontmatter } }) {

    useEffect(() => {
        logEvent(analytics, 'blog_view', {
            firebase_screen: frontmatter.title,
        })
    }, [frontmatter.title])


    return (
        <Layout header={<BlogHead title={frontmatter.title} tagline={frontmatter.excerpt} keywords={frontmatter.keywords} img={frontmatter.featuredImage} />}>
            <div className='pb-4'>
                <span className='text-2xl sm:text-4xl font-merri'>blog</span>
            </div>
            <div className="article-container justify-center">
                <div className='flex justify-center pb-2'>
                    <Card className='p-4 inline-flex align-middle'>
                        <div className="prose prose-pre:w-[90vw] md:prose-pre:w-auto dark:prose-invert">
                            {
                                frontmatter.featuredVideo ? <YouTube id={frontmatter.featuredVideo} /> :
                                    <Image src={frontmatter.featuredImage} alt={'Header Image'} width={1000} height={200} />

                            }
                            <h1>{frontmatter.title}</h1>


                            <p className="publish-date">
                                {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                                {frontmatter.readingTime}
                            </p>
                            <div className='not-prose m-0 border border-black/25 mb-2' />
                            <MDXRemote {...source} components={{ Image, YouTube }} />
                            <div className='not-prose m-0 border border-black/25 mb-2' />
                            <Author />
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    )
}

const Author = () => {
    return (
        <div className='flex items-center'>
            <div className='flex-shrink-0'>
                <Image
                    className='rounded-full'
                    src={me}
                    alt={'Rafee Jenkins'}
                    width={50}
                    height={50}
                />
            </div>
            Written by Rafee Jenkins
        </div>
    )
}


const BlogHead = ({ title, tagline, keywords, img }) => {

    const router = useRouter()
    const currentUrl = `https://rafeejenkins.com${router.asPath}`
    return (
        <Head>
            <title>{title} | Rafee Jenkins</title>
            <meta name="robots" content="follow, index" />
            <meta content={tagline} name="description" />
            <meta
                property="og:url"
                content={currentUrl}
            />
            <meta name='keywords' content={keywords} />
            <link
                rel="canonical"
                href={currentUrl}
            />
            <meta property="og:type" content={"website"} />
            <meta property="og:site_name" content="Rafee Jenkins' Personal Site" />
            <meta property="og:description" content={tagline} key="desc" />
            <meta property="og:title" content={`${title} | Rafee Jenkins`} />
            <meta name='author' content='Rafee Jenkins' />
            <meta property="og:image" content={img} />
        </Head>
    )
}

export async function getStaticProps({ params }) {
    //fetch the particular file based on the slug
    const { slug } = params
    const { content, frontmatter } = await getArticleFromSlug(slug)

    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [
                rehypeSlug,
                [
                    rehypeAutolinkHeadings,
                    {
                        properties: { className: ['anchor'] },
                    },
                    { behaviour: 'wrap' },
                ],
                rehypeHighlight,
                rehypeCodeTitles,
            ],
        },
    })

    return {
        props: {
            post: {
                source: mdxSource,
                frontmatter,
            },
        },
    }
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
    // getting all paths of each article as an array of
    // objects with their unique slugs
    const paths = (await getSlug()).map((slug) => ({ params: { slug } }))

    return {
        paths,
        // in situations where you try to access a path
        // that does not exist. it'll return a 404 page
        fallback: false,
    }
}