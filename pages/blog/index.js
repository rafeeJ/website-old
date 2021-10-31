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

  return (
    <Layout>
      <text className="flex-grow font-serif tracking-tight text-darkp text-2xl sm:text-4xl">Welcome to the blog!</text>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3">
        {posts?.docs.map((post, index) => {
          if (index == 0) {
            return <BlogCard className="col-span-2 col-start-1" post={post.data()} />
          } else {
            return <BlogCard post={post.data()} />
          }
          // <div key={post.data().stub} style={{backgroundColor:'red'}}><h1>{post.data().title}</h1></div>
        })}
      </div>
    </Layout>
  )
}