import React from "react";
import Head from "next/head";

export default function HeadTop() {

  const p = require("../public/ST_Splash.png")

  const meta = {
    title: "SewThis - Your Favourite Sewing App!",
    description: `Let SewThis do all the hard work, you just keep looking good.`,
    image: p,
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
          content={`https://sewthis.co.uk`}
        />
        <link
          rel="canonical"
          href={`https://sewthis.co.uk`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="SewThis" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
      </Head>
    </div>
  );
}