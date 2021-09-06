import React from 'react';
import styled, { css } from 'styled-components';
import { getColors } from '../../helpers';
import Icon from '../../icon';
import { Image } from '../../media';
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
  grid-template-rows: 12em max-content max-content;
  width: 22em;
`;
const StyledGrid = styled.div`
  width: max-content;
  display: grid;
  grid-gap: 7em;
  justify-self: center;
  grid-template-columns: 1fr;

  ${({ theme }) => css`
    @media ${theme.base.media.XS} {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

const PresentationGridImage = ({ primary, collection }: any) => {
  const colors = getColors(primary.color_scheme);

  console.log(primary, collection);
  return (
    <StyledWrapper>
      <Heading size="h3" align="center" color={colors.major}>
        {primary.header}
      </Heading>
      <StyledGrid>
        {collection.map(({ node }: any, i: number) => (
          <StyledColumn key={node.data.name}>
            <Image url={node.data.image.url} size="cover" position="left top" alt="" />
            <Heading size="h6" color="black">
              {node.data.name}
            </Heading>
            <Body color="">{node.data.street}</Body>
            <Body color="">
              {node.data.zip}
              {node.data.city}
            </Body>
          </StyledColumn>
        ))}
      </StyledGrid>
    </StyledWrapper>
  );
};

export default PresentationGridImage;
