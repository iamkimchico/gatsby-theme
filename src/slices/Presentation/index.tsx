import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PresentationGridImage from './PresentationGridImage';
import PresentationGridNumbered from './PresentationGridNumbered';
import PresentationSelect from './PresentationSelect';

const query = graphql`
  query teamsQuery {
    allPrismicTeam {
      edges {
        node {
          data {
            name
            paragraph
            leader {
              document {
                ... on PrismicPerson {
                  id
                  data {
                    name
                    mail
                    job_title
                    portrait {
                      alt
                      gatsbyImageData(layout: FULL_WIDTH)
                    }
                  }
                }
              }
            }
          }
          id
        }
      }
    }
    allPrismicBusinessValue {
      edges {
        node {
          data {
            name
            paragraph
          }
        }
      }
    }
    allPrismicLocation {
      edges {
        node {
          data {
            name
            zip
            street
            coordinates {
              longitude
              latitude
            }
            image {
              url
            }
            city
          }
        }
      }
    }
  }
`;

const Presentation = (data: any) => {
  const { slice_label, primary } = data;
  const allCollections = useStaticQuery(query);
  let collection = [];

  if (primary.collection === 'All Teams') {
    collection = allCollections.allPrismicTeam.edges;
  } else if (primary.collection === 'All Business Values') {
    collection = allCollections.allPrismicBusinessValue.edges;
  } else if (primary.collection === 'All Locations') {
    collection = allCollections.allPrismicLocation.edges;
  }

  return (
    <>
      {slice_label === 'select' && <PresentationSelect {...data} collection={collection} />}
      {slice_label === 'grid_numbered' && <PresentationGridNumbered {...data} collection={collection} />}
      {slice_label === 'grid_image' && <PresentationGridImage {...data} collection={collection} />}
    </>
  );
};

export default Presentation;
