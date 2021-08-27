import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as slices from './SliceMap';

const query = graphql`
  query Footer {
    prismicNavigation {
      data {
        bodyFooter {
          ... on PrismicNavigationBodyFooterClassic {
            id
            slice_label
            slice_type
            primary {
              left_link_list_header
              middle_link_list_header
              right_link_list_header
            }
            items {
              link_label
              link_list
              link_url {
                url
                target
                link_type
                document {
                  ... on PrismicStandardPage {
                    uid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Footer: React.FC = () => {
  const data = useStaticQuery(query);
  const content = data.prismicNavigation.data.bodyFooter[0];
  const Slice = slices[content.slice_type as keyof typeof slices];

  return <Slice data={content} />;
};

export default Footer;
