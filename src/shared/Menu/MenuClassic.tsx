import React from 'react';
import styled, { css } from 'styled-components';
import { Socials } from '..';
import { getColors, getGridLayout, resolveLink } from '../../helpers';
import { useViewport } from '../../hooks';
import { TSizeNames } from '../../types';
import { Body, Heading, Link } from '../../typography';
import { groupByProp } from '../../utils';

type TProps = {
  data: any;
};

type TStyledProps = {
  direction: string;
  justify?: string;
};

const StyledWrapper = styled.div<{ viewport: TSizeNames }>`
  position: relative;
  height: 100%;
  display: grid;
  position: relative;
  z-index: ${({ theme }) => theme.base.zLevels[10]};
  grid-template-columns: ${({ viewport }) => getGridLayout(viewport)};
`;
const StyledContent = styled.div`
  width: 100%;
  grid-column-start: edge-left;
  grid-column-end: edge-right;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4em;
  padding-top: 1em;

  ${({ theme }) => css`
    @media ${theme.base.media.SM} {
      margin: auto;
    }
    @media ${theme.base.media.LG} {
      display: grid;
      grid-template-columns: 30em 1fr;
    }
    @media ${theme.base.media.MX} {
      grid-column-start: edge-left;
      grid-column-end: edge-right;
    }
  `}
`;

const StyledColumn = styled.div<{ justify: string }>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
  gap: 5em;

  ${({ theme }) => css`
    @media ${theme.base.media.SM} {
      flex-direction: row;
    }
  `}
`;

const StyledLinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const StyledAreaHeader = styled(Heading)`
  line-height: 1em;
`;

const MenuClassic: React.FC<TProps> = ({ data }) => {
  const linkLists = groupByProp<any>(data.items, ['link_list']);
  const viewport = useViewport();
  const colors = getColors(data.color_scheme);

  return (
    <StyledWrapper viewport={viewport.size}>
      <StyledContent>
        <StyledColumn direction="column">
          <div>
            <Heading size={viewport.index > 3 ? 'h1' : 'h3'} color={colors.major} marginBottom="XS">
              Et hjerte for Gud og mennesker
            </Heading>

            <Socials size="SM" color={colors.major} margin="MD" />
          </div>
        </StyledColumn>
        <StyledColumn justify="space-between">
          {Object.keys(linkLists).map((area) => (
            <StyledLinkList key={area}>
              <StyledAreaHeader size="h4" color={colors.white}>
                {data.primary[`${area.toLowerCase()}_link_list_header`]}
              </StyledAreaHeader>
              {linkLists[area].map(({ link_url, link_text }) => (
                <Link key={link_text + link_url.url} href={resolveLink(link_url)} target={link_url.target}>
                  <Heading size="h5" color={colors.white}>
                    {link_text}
                  </Heading>
                </Link>
              ))}
            </StyledLinkList>
          ))}
        </StyledColumn>
      </StyledContent>
    </StyledWrapper>
  );
};

export default MenuClassic;
