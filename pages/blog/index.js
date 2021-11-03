import Layout from '../../components/Layout'

import { useCollection } from "react-firehooks/firestore";
import { db } from '../../firebase/clientApp';
import { collection, query, orderBy } from '@firebase/firestore';
import { useEffect } from 'react';
import BlogCard from '../../components/BlogCard';

export default function Blog() {

  const [posts, postsLoading, postsError] = useCollection(
    query(collection(db, 'posts'), orderBy('datePosted', "desc"))
  );

  if (!postsLoading && posts) {
    posts.docs.map((doc) => console.log(doc.data()));
  }

  if (postsLoading) {
    console.log('i am wainting')
  }

  return (
    <Layout>
      <div className="py-4">
      <text className="flex-grow font-serif tracking-tight text-darkp text-2xl sm:text-4xl">Welcome to the blog!</text>
      </div>
      <div className="pb-4">
        <text className="font-serif tracking-tight text-lightp text-2xl sm:text-4xl col-span-2">Latest Post</text>
        <BlogCard post={posts?.docs[0].data()} />
      </div>
      <div>
        <text className="font-serif tracking-tight text-lightp text-2xl sm:text-4xl col-span-2">Older posts</text>
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4">
          {posts?.docs.slice(1).map((post, index) => {
            return (<><BlogCard post={post.data()} /></>)
          }
          )}
        </div>
      </div>
    </Layout>
  )
}