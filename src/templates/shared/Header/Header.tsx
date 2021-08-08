import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as slices from './slices/sliceMapper';

const Header = () => {
  const data = useStaticQuery(graphql`
    query Header {
      prismicNavigation {
        data {
          bodyHeader {
            ... on PrismicNavigationBodyHeaderClassic {
              slice_label
              slice_type
              primary {
                menu_button_label
              }
            }
          }
          cta_link_label
          cta_page_link_url {
            slug
            target
          }
        }
      }
    }
  `);

  const content = data.prismicNavigation.data;
  const Slice = slices[content.bodyHeader[0].slice_type as keyof typeof slices];

  return <Slice data={content} />;
};

export default Header;
