import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import * as slices from './slices/sliceMapper';

const Menu: React.FC = () => {
  const data = useStaticQuery(graphql`
    query Menu {
      prismicNavigation {
        data {
          bodyMenu {
            ... on PrismicNavigationBodyMenuClassic {
              id
              items {
                link_label
                link_list
                link_url {
                  url
                  target
                }
              }
              primary {
                left_link_list_header
                middle_link_list_header
                right_link_list_header
              }
              slice_label
              slice_type
            }
          }
        }
      }
    }
  `);

  const content = data.prismicNavigation.data.bodyMenu[0];
  const Slice = slices[content.slice_type as keyof typeof slices];

  return <Slice data={content} />;
};
export default Menu;
