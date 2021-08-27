import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import PresentationSelect from './PresentationSelect';

const teamsQuery = graphql`
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
                      url
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
  }
`;

const Presentation = (data: any) => {
  const { slice_label, primary } = data;
  const teams = useStaticQuery(teamsQuery);
  let collection = [];

  if (primary.collection === 'All Teams') {
    collection = teams.allPrismicTeam.edges;
  }

  return <>{slice_label === 'select' && <PresentationSelect {...data} collection={collection} />}</>;
};

export default Presentation;
