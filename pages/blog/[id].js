import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Head from 'next/head'

export default function Post() {
    const router = useRouter()
    const {id} = router.query

  return (
    <Layout>
      <Head>
      <meta property="og:description" content="Description of the blog post" key="desc"/>
      </Head>
      <text className="flex-grow">Welcome to the {id} post!</text>
    </Layout>
  )
}