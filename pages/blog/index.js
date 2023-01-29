import { Grid } from '@mui/material'
import { logEvent } from 'firebase/analytics'
import React, { useEffect } from 'react'
import BlogCard from '../../components/BlogCard'
import Layout from '../../components/Layout'
import { analytics } from '../../firebase/clientApp'
import { getAllArticles } from '../../src/utils/mdx'

export default function BlogPage({ posts }) {

    useEffect(() => {
        logEvent(analytics, 'screen_view', {
            firebase_screen: 'Blog'
        })
    }, [])

    return (
        <Layout>
            <div className='pb-4'>
                <span className='text-2xl sm:text-4xl font-merri'>blog</span>
            </div>

            <Grid container columns={{ xs: 1, md: 3 }} spacing={2}>

                {
                    posts.map((frontMatter, idx) => {
                        return (
                            <Grid item key={idx} xs={1} alignItems={'stretch'}>
                                <BlogCard info={frontMatter} />
                            </Grid>
                        )
                    })}
            </Grid>
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