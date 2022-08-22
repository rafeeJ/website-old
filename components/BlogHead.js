import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router'

export default function HeadTop() {
  const router = useRouter()
  const currentUrl = `https://rafeejenkins.com${router.asPath}`

  var path = router.asPath;

  const meta = {
    description: `The personal website of Rafee Jenkins - Made with ♥ and ⚛`,
    type: "website",
  };
  
  return (
    <div>
      <Head>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={currentUrl}
        />
        <link
          rel="canonical"
          href={currentUrl}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Rafee J. Jenkins" />
        <meta property="og:description" content={meta.description} key="desc"/>
        <meta property="og:title" content={meta.title} />
      </Head>
    </div>
  );
}