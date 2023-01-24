import React from 'react';
import Link from 'next/link'
import { Card, Typography } from '@mui/material';
import dayjs from 'dayjs';

export default function BlogCard({ info }) {
  return (
    <Card sx={{ padding: 3 }}>
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
    </Card>
  );
}
