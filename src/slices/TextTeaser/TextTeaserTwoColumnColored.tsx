import React from 'react';
import styled, { css } from 'styled-components';
import { getColors, resolveLink } from '../../helpers';
import { Button } from '../../inputs';
import { Body, Heading, Link } from '../../typography';

const StyledWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  position: relative;
  padding: 6em;

  ${({ theme, color }) => css`
    margin-bottom: ${theme.base.spacing.MD};
    margin-top: ${theme.base.spacing.MD};

    &:after {
      content: '';
      top: 0;
      left: 0;
      opacity: 0.2;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${color};
    }

    @media ${theme.base.media.MD} {
      grid-column-start: outer-xx-left;
      grid-column-end: outer-xx-right;
      column-count: 2;
      column-gap: 7em;
    }
  `}

  > *:not(:last-child) {
    margin-bottom: 0.5em;
  }
`;

const TextTeaserTwoColumnColored: React.FC = ({ primary }: any) => {
  const colors = getColors(primary.color_scheme);
  return (
    <StyledWrapper color={colors.major}>
      <Heading size="h3" color={colors.major}>
        {primary.header}
      </Heading>
      <Body color={colors.black}>{primary.paragraph}</Body>

      <Link href={resolveLink(primary.button_url)} target={primary.button_url.target}>
        <Button color={colors.major} margin="MD">
          {primary.button_label}
        </Button>
      </Link>
    </StyledWrapper>
  );
};

export default TextTeaserTwoColumnColored;
