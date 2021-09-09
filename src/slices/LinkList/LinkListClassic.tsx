import React from 'react';
import styled, { css } from 'styled-components';
import { getColors, resolveLink } from '../../helpers';
import { Button } from '../../inputs';
import { Heading, Link } from '../../typography';

const StyledWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2em;
  ${({ theme }) => css`
    margin-bottom: ${theme.base.spacing.LG};
    margin-top: ${theme.base.spacing.LG};
    @media ${theme.base.media.LG} {
      grid-column-start: outer-xxx-left;
      grid-column-end: outer-xxx-right;
    }
  `}
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3em;
  margin: auto;
  ${({ theme }) => css`
    @media ${theme.base.media.LG} {
    }
  `}
`;

const LinkListClassic: React.FC = ({ primary, items }: any) => {
  const colors = getColors(primary.color_scheme);
  return (
    <StyledWrapper>
      <Heading size="h5" color={colors.base} align="center">
        {primary.header}
      </Heading>
      <StyledLinksWrapper>
        {items.map((link: any) => (
          <Link href={resolveLink(link.link_url)} target={link.link_url.target} key={link.link_text}>
            <Button shape="arrow" variant="text" color={colors.major}>
              {link.link_text}
            </Button>
          </Link>
        ))}
      </StyledLinksWrapper>
    </StyledWrapper>
  );
};

export default LinkListClassic;
