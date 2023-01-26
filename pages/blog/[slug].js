import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import rehypeSlug from 'rehype-slug'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import { serialize } from 'next-mdx-remote/serialize'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import dayjs from 'dayjs'
import { getArticleFromSlug, getSlug } from '../../src/utils/mdx'
import Layout from '../../components/Layout'
import { Card, Divider } from '@mui/material'
import { useRouter } from 'next/router'

export default function Blog({ post: { source, frontmatter } }) {
    return (
        <Layout header={<BlogHead title={frontmatter.title} tagline={frontmatter.excerpt} />}>
            <div className='pb-4'>
                <span className='text-2xl sm:text-4xl font-merri'>{frontmatter.title}</span>
            </div>
            <div className="article-container justify-center">
                <p className="publish-date">
                    {dayjs(frontmatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                    {frontmatter.readingTime}
                </p>
                <div className='flex justify-center'>
                    <Card className='p-4 inline-flex align-middle'>
                        <div className="content prose-sm md:prose dark:prose-invert">
                            <MDXRemote {...source} components={{ Image }} />
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    )
}

const BlogHead = ({ title, tagline }) => {

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
            <link
                rel="canonical"
                href={currentUrl}
            />
            <meta property="og:type" content={"website"} />
            <meta property="og:site_name" content="GetHalal" />
            <meta property="og:description" content={tagline} key="desc" />
            <meta property="og:title" content={title} />
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