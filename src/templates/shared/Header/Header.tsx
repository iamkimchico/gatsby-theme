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

  const content = data.prismicNavigation.data.bodyHeader[0];
  const Slice = slices[content.slice_type as keyof typeof slices];

  return <Slice data={data.prismicNavigation.data} />;
};

export default Header;
