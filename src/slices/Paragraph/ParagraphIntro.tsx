import React from 'react';
import styled, { css } from 'styled-components';
import { getColors } from '../../helpers';
import { Body } from '../../typography';

const StyledWrapper = styled.div`
  text-align: center;
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  > *:not(:last-child) {
    margin-bottom: 0.5em;
  }

  ${({ theme }) => css`
    margin-bottom: ${theme.base.spacing.XL};
    margin-top: ${theme.base.spacing.XL};

    @media ${theme.base.media.SM} {
      margin-bottom: ${theme.base.spacing.LG};
      margin-top: ${theme.base.spacing.LG};
    }
    @media ${theme.base.media.MD} {
      grid-column-start: outer-x-left;
      grid-column-end: outer-x-right;
      margin-bottom: ${theme.base.spacing.LG};
      margin-top: ${theme.base.spacing.LG};
    }
    @media ${theme.base.media.LG} {
      grid-column-start: inner-left;
      grid-column-end: inner-right;
    }
  `}
`;

const ParagraphIntro: React.FC = ({ primary }: any) => {
  const colors = getColors(primary.color_scheme);
  return (
    <StyledWrapper>
      <Body size="LG" color={colors.base} align="center">
        {primary.paragraph}
      </Body>
    </StyledWrapper>
  );
};

export default ParagraphIntro;
