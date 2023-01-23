import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import dayjs from 'dayjs'
import { getAllArticles } from '../../src/utils/mdx'
import Layout from '../../components/Layout'

export default function BlogPage({ posts }) {
    return (
        <Layout>

            <React.Fragment>
                <Head>
                    <title>My Blog</title>
                </Head>
                <div>
                    {posts.map((frontMatter, idx) => {
                        return (
                            <Link key={idx} href={`/blog/${frontMatter.slug}`} passHref>
                                <div>
                                    <h1 className="title">{frontMatter.title}</h1>
                                    <p className="summary">{frontMatter.excerpt}</p>
                                    <p className="date">
                                        {dayjs(frontMatter.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
                                        {frontMatter.readingTime}
                                    </p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </React.Fragment>
        </Layout>

    )
}

export async function getStaticProps() {
    const articles = await getAllArticles()

    articles
        .map((article) => article.data)
        .sort((a, b) => {
            if (a.data.publishedAt > b.data.publishedAt) return 1
            if (a.data.publishedAt < b.data.publishedAt) return -1

            return 0
        })

    return {
        props: {
            posts: articles.reverse(),
        },
    }
}