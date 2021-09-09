import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import LocationsClassic from './LocationsClassic';

const query = graphql`
  query locationsQuery {
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
              alt
              gatsbyImageData(layout: FULL_WIDTH)
            }
            city
          }
        }
      }
    }
  }
`;

const Locations = (data: any) => {
  const { slice_label } = data;
  const locationsData = useStaticQuery(query);

  return (
    <>
      {slice_label === 'classic' && <LocationsClassic {...data} locations={locationsData.allPrismicLocation.edges} />}
    </>
  );
};

export default Locations;
