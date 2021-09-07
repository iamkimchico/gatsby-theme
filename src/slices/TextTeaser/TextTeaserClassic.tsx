import React from 'react';
import styled, { css } from 'styled-components';
import { getColors, resolveLink } from '../../helpers';
import { Button } from '../../inputs';
import { Body, Heading, Link } from '../../typography';

const StyledWrapper = styled.div`
  text-align: center;
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  gap: 0.5em;
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    margin-bottom: ${theme.base.spacing.LG};
    margin-top: ${theme.base.spacing.LG};

    @media ${theme.base.media.SM} {
      margin-bottom: ${theme.base.spacing.MD};
      margin-top: ${theme.base.spacing.MD};
    }

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

const TextTeaserClassic: React.FC = ({ primary }: any) => {
  const colors = getColors(primary.color_scheme);
  return (
    <StyledWrapper>
      <Body size="LG" color={colors.base} align="center">
        {primary.paragraph}
      </Body>

      <Link href={resolveLink(primary.button_url)} target={primary.button_url.target}>
        <Button shape="arrow" color={colors.major}>
          {primary.button_label}
        </Button>
      </Link>
    </StyledWrapper>
  );
};

export default TextTeaserClassic;
