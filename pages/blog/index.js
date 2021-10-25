import Layout from '../../components/Layout'

import { useCollection } from "react-firehooks/firestore";
import { db } from '../../firebase/clientApp';
import { collection, doc, getDocs } from '@firebase/firestore';
import { useEffect } from 'react';
import BlogCard from '../../components/BlogCard';

export default function Blog() {

  const [posts, postsLoading, postsError] = useCollection(
    collection(db, 'posts')
  );

  if (!postsLoading && posts) {
    posts.docs.map((doc) => console.log(doc.data()));
  }

  return (
    <Layout>

      <text className="flex-grow">Welcome to the blog!</text>
      {posts?.docs.map((post) => (
        <><BlogCard post={post.data()} /></>
        // <div key={post.data().stub} style={{backgroundColor:'red'}}><h1>{post.data().title}</h1></div>
      ))}
    </Layout>
  )
}