import { graphql } from 'gatsby';
import React from 'react';
import SliceResolver from '../slices/SliceResolver';

type TProps = {
  data:any;
}

const LandingPage:React.FC<TProps> = ({ data }) => {
  const content = data.prismicLandingPage.data;
  const slices = content.body;
  return <>{SliceResolver(slices)}</>;
};

export const prismic = graphql`
  query pageQuery($prismicId: ID) {
    prismicLandingPage(prismicId: { eq: $prismicId }) {
      data {
        body {
          ... on PrismicLandingPageBodyHero {
            id
            slice_label
            slice_type
            primary {
              header
              tagline
              image {
                url
              }
            }
          }
        }
        page_description
        page_title {
          raw
        }
        show_page_description
        show_page_title
      }
      url
      uid
      type
      lang
      id
      tags
      alternate_languages {
        lang
        url
        uid
        type
      }
    }
  }
`;

export default LandingPage;
