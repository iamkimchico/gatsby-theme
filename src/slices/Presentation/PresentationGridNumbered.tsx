import React from 'react';
import styled, { css } from 'styled-components';
import { getColors } from '../../helpers';
import Icon from '../../icon';
import { Body, Heading } from '../../typography';
import { replaceEach } from '../../utils';

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 3em;
  ${({ theme }) => css`
    grid-column-start: outer-xxx-left;
    grid-column-end: outer-xxx-right;
    margin-bottom: ${theme.base.spacing.XL};
    margin-top: ${theme.base.spacing.MD};
  `}
`;
const StyledColumn = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: max-content max-content max-content;
  grid-column-gap: 1em;
  max-width: 20em;
  > div {
    grid-area: 2/1/3/3;
  }
`;
const StyledGrid = styled.div`
  width: max-content;
  display: grid;
  grid-gap: 5em;
  justify-self: center;
  grid-template-columns: 1fr;

  ${({ theme }) => css`
    @media ${theme.base.media.XS} {
      grid-template-columns: 1fr 1fr;
    }
    @media ${theme.base.media.MD} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  `}
`;

const PresentationGridNumbered = ({ primary, collection }: any) => {
  const colors = getColors(primary.color_scheme);

  return (
    <StyledWrapper>
      <Heading size="h3" align="center" color={colors.major}>
        {primary.header}
      </Heading>
      <StyledGrid>
        {collection.map(({ node }: any, i: number) => (
          <StyledColumn key={node.data.name}>
            <Heading size="h2" color={colors.base} variation="special">
              {i + 1}
            </Heading>
            <Heading color={colors.major} size="h5">
              <p
                dangerouslySetInnerHTML={{
                  __html: replaceEach(node.data.name, '\n', '<br>'),
                }}
              />
            </Heading>
            <div>
              <Body color={colors.black}>
                <p
                  dangerouslySetInnerHTML={{
                    __html: replaceEach(node.data.paragraph, '\n', '<br>'),
                  }}
                />
              </Body>
            </div>
          </StyledColumn>
        ))}
      </StyledGrid>
    </StyledWrapper>
  );
};

export default PresentationGridNumbered;
