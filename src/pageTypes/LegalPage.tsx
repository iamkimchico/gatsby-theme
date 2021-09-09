import { graphql } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import { RichText } from 'prismic-reactjs';
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

const LegalPage: React.FC<TProps> = ({ data }) => {
  const content = data.prismicLegalPage.data;
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
  query legalPageQuery($prismicId: ID) {
    prismicLegalPage(prismicId: { eq: $prismicId }) {
      data {
        page_description
        page_title {
          raw
        }
        show_page_description
        show_page_title
        title_color_scheme
        body {
          ... on PrismicLegalPageDataBodyRichTextEditor {
            id
            slice_label
            slice_type
            primary {
              rich_text {
                html
                raw
                text
              }
            }
          }
        }
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

export default LegalPage;
