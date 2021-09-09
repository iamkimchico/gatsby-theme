import { graphql } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import Grid from '../common/Grid';
import { getColors } from '../helpers';
import { Body, Heading } from '../typography';
import SliceResolver from '../slices/SliceResolver';

type TProps = {
  data: any;
};

const StyledHeading = styled.div`
  ${({ theme }) => css`
    grid-column-start: outer-xxx-left;
    grid-column-end: outer-xxx-right;

    margin-top: ${theme.base.spacing.MX};
    margin-bottom: ${theme.base.spacing.LG};
    h1 {
      font-size: 3em;
      text-transform: none;
      @media ${theme.base.media.MD} {
        font-size: 4em;
      }
      @media ${theme.base.media.LG} {
        font-size: 5em;
      }
    }
    @media ${theme.base.media.MD} {
      grid-column-start: outer-xx-left;
      grid-column-end: outer-xx-right;
    }
    p {
      max-width: 40em;
    }
  `}
`;

const StandardPage: React.FC<TProps> = ({ data }) => {
  const content = data.prismicStandardPage.data;
  const slices = content.body.filter((slice: any) => Object.keys(slice).length > 0);
  const colors = getColors(content.title_color_scheme);
  return (
    <>
      {content.show_page_title && (
        <Grid row>
          <StyledHeading>
            <Heading size="h1" color={colors.major}>
              {content.page_title.raw[0].text}
            </Heading>
            {content.show_page_description && (
              <Body color={colors.base} size="LG">
                {content.page_description}
              </Body>
            )}
          </StyledHeading>
        </Grid>
      )}
      {SliceResolver({ slices })}
    </>
  );
};

export const prismic = graphql`
  query standardPageQuery($prismicId: ID) {
    prismicStandardPage(prismicId: { eq: $prismicId }) {
      data {
        body {
          ... on PrismicStandardPageDataBodyHero {
            id
            slice_label
            slice_type
            primary {
              color_scheme
              header
              tagline
              media {
                url
              }
              image {
                alt
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          ... on PrismicStandardPageDataBodyMediaTeaser {
            id
            slice_label
            slice_type
            primary {
              button_text
              color_scheme
              direction
              header
              image {
                alt
                gatsbyImageData(layout: FULL_WIDTH)
              }
              paragraph
              button_link {
                url
                target
                link_type
              }
            }
          }
          ... on PrismicStandardPageDataBodyTextTeaser {
            id
            slice_label
            slice_type
            primary {
              button_text
              button_url {
                url
                target
              }
              color_scheme
              header
              paragraph
            }
          }
          ... on PrismicStandardPageDataBodyCardsTeaser {
            id
            slice_type
            slice_label
            items {
              button_text
              header
              button_link {
                url
                target
                link_type
              }
              image {
                alt
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            primary {
              header
              paragraph
              color_scheme
            }
          }
          ... on PrismicStandardPageDataBodyUsp {
            id
            slice_label
            slice_type
            primary {
              color_scheme
              justify
              icon_size
            }
            items {
              header
              icon
              paragraph
            }
          }
          ... on PrismicStandardPageDataBodyParagraph {
            id
            primary {
              paragraph
              color_scheme
            }
            slice_label
            slice_type
          }
          ... on PrismicStandardPageDataBodyTestimonialCarousel {
            id
            slice_label
            slice_type
            primary {
              direction
              color_scheme
            }
            items {
              author {
                document {
                  ... on PrismicPerson {
                    id
                    data {
                      name
                      job_title
                      mail
                      portrait {
                        alt
                        gatsbyImageData(layout: FULL_WIDTH)
                      }
                    }
                  }
                }
              }
              image {
                alt
                gatsbyImageData(layout: FULL_WIDTH)
              }
              paragraph
            }
          }
          ... on PrismicStandardPageDataBodyPresentation {
            id
            slice_label
            slice_type
            primary {
              collection
              color_scheme
              header
              select_placeholder
            }
          }
          ... on PrismicStandardPageDataBodyInfoBox {
            id
            slice_label
            slice_type
            primary {
              color_scheme
              direction
              header
              paragraph
              image {
                alt
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          ... on PrismicStandardPageDataBodyLinkList {
            id
            slice_label
            slice_type
            items {
              link_text
              link_url {
                document {
                  ... on PrismicStandardPage {
                    id
                    uid
                  }
                  ... on PrismicLegalPage {
                    id
                    uid
                  }
                }
                url
                target
                link_type
              }
            }
            primary {
              color_scheme
              header
            }
          }
          ... on PrismicStandardPageDataBodyImageInfoList {
            id
            slice_label
            slice_type
            primary {
              color_scheme
              header
            }
            items {
              header
              image {
                alt
                gatsbyImageData(layout: FULL_WIDTH)
              }
              paragraph
              image_description
            }
          }
          ... on PrismicStandardPageDataBodyLocations {
            id
            primary {
              color_scheme
              header
              paragraph
              direction
            }
            slice_label
            slice_type
          }
          ... on PrismicStandardPageDataBodyFormLink {
            id
            slice_label
            slice_type
            primary {
              button_text
              color_scheme
              form_link {
                url
                target
                link_type
              }
              paragraph
              header
            }
          }
        }
        page_description
        page_title {
          raw
        }
        show_page_description
        show_page_title
        title_color_scheme
      }
      url
      uid
      type
      lang
      id
      tags
      alternate_languages {
        lang
        uid
        type
      }
    }
  }
`;

export default StandardPage;
