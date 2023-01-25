import React from 'react'
import Head from 'next/head'
import Link from "next/link"
import dayjs from 'dayjs'
import { getAllArticles } from '../../src/utils/mdx'
import Layout from '../../components/Layout'
import { Card, Grid } from '@mui/material'
import BlogCard from '../../components/BlogCard'

export default function BlogPage({ posts }) {
    return (
        <Layout>
            <div className='pb-4'>
                <span className='text-2xl sm:text-4xl font-merri'>blog</span>
            </div>

            <Grid container columns={{ xs: 2, md: 3 }} spacing={2}>

                {
                    posts.map((frontMatter, idx) => {
                        return (
                            <Grid item key={idx} xs={1} >
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