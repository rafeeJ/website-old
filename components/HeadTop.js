import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router'

export default function HeadTop() {
  const router = useRouter()
  const currentUrl = `https://rafeejenkins.com${router.asPath}`

  var path = router.asPath;

  const p = require("../public/ST_Splash.png")

  const meta = {
    title: `Rafee Jenkins | ${path == '/' ? 'Home' : 'Rafee Jenkins | ' + path.replace('/', '')}`,
    description: `The personal website of Rafee Jenkins - Made with ♥ and ⚛`,
    image: 'https://avatars1.githubusercontent.com/u/1508676?s=460&u=b2e51a0ca47547585614685cec42a1c16955986c&v=4',
    type: "website",
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
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
        <meta property="og:image" content={meta.image} />
      </Head>
    </div>
  );
}