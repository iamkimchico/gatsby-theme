import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../../../inputs';
import { Body, Heading, Link } from '../../../typography';

const StyledWrapper = styled.div`
  text-align: center;
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  gap: 0.5em;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    margin-bottom: ${theme.base.spacing.MD};
    margin-top: ${theme.base.spacing.MD};

    @media ${theme.base.media.MD} {
      grid-column-start: outer-x-left;
      grid-column-end: outer-x-right;
    }
    @media ${theme.base.media.LG} {
      grid-column-start: inner-left;
      grid-column-end: inner-right;
    }
  `}

  > *:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

const Center: React.FC = ({ primary }: any) => (
  <StyledWrapper>
    {primary.header && (
      <Heading size="h5" align="center">
        {primary.header}
      </Heading>
    )}
    <Body size="LG" colorScheme="black" align="center">
      {primary.paragraph}
    </Body>

    <Link href={primary.button_url.url} target={primary.button_url.target}>
      <Button colorScheme={primary.color_scheme.toLowerCase()}>{primary.button_label}</Button>
    </Link>
  </StyledWrapper>
);

export default Center;
