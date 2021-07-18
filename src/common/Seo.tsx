import React from 'react';
import { Helmet } from 'react-helmet';

const Seo: React.FC = (data: any) => {
  const {
    meta_title,
    meta_description,
    meta_type,
    url,
    meta_image,
    meta_twitter_creator,
    meta_twitter_card,
    meta_index_page,
  } = data;
  return (
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
      <meta property="og:title" content={meta_title} />
      <meta property="og:type" content={meta_type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={meta_image?.fixed?.src} />
      <meta property="og:site_name" content="" />
      <meta property="twitter:title" content={meta_title} />
      <meta property="twitter:description" content={meta_description} />
      <meta property="twitter:image" content={meta_image?.fixed?.src} />
      <meta property="twitter:site" content="" />
      <meta property="twitter:creator" content={meta_twitter_creator} />
      <meta property="twitter:card" content={meta_twitter_card} />
      <meta name="robots" content={meta_index_page
        ? 'index, follow'
        : 'noindex, nofollow'} />
    </Helmet>
  );
};

export default Seo;
