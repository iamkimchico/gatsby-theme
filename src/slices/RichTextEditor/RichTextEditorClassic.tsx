import { RichText } from 'prismic-reactjs';
import React from 'react';
import styled, { css } from 'styled-components';
import htmlSerializer from '../../utils/htmlSerializer';

const StyledWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  margin-bottom: 5em;
  ${({ theme }) => css`
    @media${theme.base.media.SM} {
      grid-column-start: outer-xxx-left;
      grid-column-end: outer-xx-right;
    }
    @media${theme.base.media.MD} {
      grid-column-start: outer-xx-left;
      grid-column-end: outer-xx-right;
    }
  `}
`;

const RichTextEditorClassic: React.FC = ({ primary }: any) => (
  <StyledWrapper>
    <RichText render={primary.rich_text.raw} htmlSerializer={htmlSerializer} />
  </StyledWrapper>
);

export default RichTextEditorClassic;
