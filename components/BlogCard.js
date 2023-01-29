import React from 'react';
import Link from 'next/link'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';

export default function BlogCard({ info }) {
  return (
    <Card sx={{ padding: 3 }}>

      <Image src={info.featuredImage} width={500} height={500} alt={'title'} />
      <CardContent>
        <Link href={`/blog/${info.slug}`} passHref>
          <div>
            <Typography variant="h4" className="title">
              {info.title}
            </Typography>
            <Typography variant="subtitle1" className="excerpt">
              {info.excerpt}
            </Typography>
            <Typography variant="subtitle2" className="date">
              {dayjs(info.publishedAt).format('MMMM D, YYYY')} &mdash;{' '}
              {info.readingTime}
            </Typography>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
