import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = (data:any) => (
    <Helmet>
      <title>{data.meta_title}</title>
      <meta name="description" content={data?.meta_description} />
      <meta property="og:title" content={data?.meta_title} />
      <meta property="og:type" content={data?.meta_type} />
      <meta property="og:url" content={data?.url} />
      <meta property="og:image" content={data?.meta_image?.fixed?.src} />
      <meta property="og:site_name" content="" />
      <meta property="twitter:title" content={data?.meta_title} />
      <meta property="twitter:description" content={data?.meta_description} />
      <meta property="twitter:image" content={data?.meta_image?.fixed?.src} />
      <meta property="twitter:site" content="" />
      <meta property="twitter:creator" content={data?.meta_twitter_creator} />
      <meta property="twitter:card" content={data?.meta_twitter_card} />
      <meta name="robots" content={data?.meta_index_page ? 'index, follow' : 'noindex, nofollow'} />
    </Helmet>
  );

export default Seo;
