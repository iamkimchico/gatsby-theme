import React from 'react';
import styled, { css } from 'styled-components';
import { getGridLayout, getGridGap } from '../helpers';

type TProps = {
  hasAnnouncement?: boolean;
  row?: boolean;
  container?: boolean;
};

const StyledWrapper = styled.div<TProps>`
  display: grid;
  grid-template-columns: ${getGridLayout('XS')};
  ${({ theme }) => css`
    @media ${theme.base.media.SM} {
      grid-template-columns: ${getGridLayout('SM')};
    }
    @media ${theme.base.media.MD} {
      grid-template-columns: ${getGridLayout('MD')};
    }
    @media ${theme.base.media.LG} {
      grid-template-columns: ${getGridLayout('LG')};
    }
    @media ${theme.base.media.XL} {
      grid-template-columns: ${getGridLayout('XL')};
    }
    @media ${theme.base.media.MX} {
      grid-template-columns: ${getGridLayout('MX')};
    }
  `}

  ${({ container, hasAnnouncement, theme }) =>
    container &&
    css`
      max-width: ${theme.base.MAXWIDTH};
      width: 100vw;
      margin: auto;
      grid-row-gap: ${getGridGap('XS')};
      margin-top: ${hasAnnouncement
    ? '2.5em'
    : '0'};

      @media ${theme.base.media.SM} {
        grid-row-gap: ${getGridGap('SM')};
      }
      @media ${theme.base.media.MD} {
        grid-row-gap: ${getGridGap('MD')};
      }
      @media ${theme.base.media.LG} {
        grid-row-gap: ${getGridGap('LG')};
      }
      @media ${theme.base.media.XL} {
        grid-row-gap: ${getGridGap('XL')};
      }
      @media ${theme.base.media.MX} {
        grid-row-gap: ${getGridGap('MX')};
      }
    `}

  ${({ row }) =>
    row &&
    css`
      grid-column-start: 1;
      grid-column-end: 10;
    `}
`;

const Grid: React.FC<TProps> = ({ children, hasAnnouncement, row, container }) => (
  <StyledWrapper row={row} container={container} hasAnnouncement={hasAnnouncement}>
    {children}
  </StyledWrapper>
);

export default Grid;
