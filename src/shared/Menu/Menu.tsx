import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import * as slices from './SliceMap';

const query = graphql`
  query Menu {
    prismicNavigation {
      data {
        color_scheme
        bodyMenu {
          ... on PrismicNavigationDataBodyMenuClassic {
            id
            items {
              link_label
              link_list
              link_url {
                link_type
                document {
                  ... on PrismicStandardPage {
                    id
                    uid
                  }
                }
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
`;
const Menu: React.FC = () => {
  const data = useStaticQuery(query);
  const content = {
    ...data.prismicNavigation.data.bodyMenu[0],
    color_scheme: data.prismicNavigation.data.color_scheme,
  };
  const Slice = slices[content.slice_type as keyof typeof slices];

  return <Slice data={content} />;
};
export default Menu;
