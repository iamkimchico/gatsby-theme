import React from 'react';
import styled, { css } from 'styled-components';
import { getColors } from '../../helpers';
import { Body } from '../../typography';

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    grid-column-start: outer-xxx-left;
    grid-column-end: outer-xxx-right;
    margin-bottom: ${theme.base.spacing.MD};
    margin-top: ${theme.base.spacing.MD};
    > *:not(:last-child) {
      margin-bottom: 0.5em;
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
