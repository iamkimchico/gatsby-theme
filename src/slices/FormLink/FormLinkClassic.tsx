import React from 'react';
import styled, { css } from 'styled-components';
import { getColors } from '../../helpers';
import { Button } from '../../inputs';
import { Body, Heading, Link } from '../../typography';

const StyledWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  display: grid;
  justify-items: center;
  ${({ theme }) => css`
    margin-bottom: ${theme.base.spacing.LG};
    @media${theme.base.media.SM} {
      grid-column-start: outer-x-left;
      grid-column-end: outer-x-right;
    }
    @media${theme.base.media.MD} {
      grid-column-start: inner-left;
      grid-column-end: inner-right;
    }
  `}
`;

const FormLinkClassic: React.FC = ({ primary }: any) => {
  const colors = getColors(primary.color_scheme);
  return (
    <StyledWrapper>
      <Heading size="h5" color={colors.base} align="center" marginBottom="SM">
        {primary.header}
      </Heading>
      <Body color={colors.black} align="center">
        {primary.paragraph}
      </Body>
      <Link href={primary.form_link.url} target="_blank">
        <Button color={colors.major} margin="SM" shape="rounded">
          {primary.button_text}
        </Button>
      </Link>
    </StyledWrapper>
  );
};

export default FormLinkClassic;
