import React from 'react';
import Link from 'next/link'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Image from 'next/image';

export default function BlogCard({ info }) {
  return (
    <Card sx={{ padding: 3 }}>
      <CardMedia
        title='test'
        sx={{ height: 200 }}>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image src={info.featuredImage} fill={true} alt={'title'} />
        </div>
      </CardMedia>
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
