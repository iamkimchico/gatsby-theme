import React from 'react';
import styled, { css, useTheme } from 'styled-components';
import { groupByProp } from '../../utils';
import { Body, Link } from '../../typography';
import { Socials } from '..';
import { resolveLink } from '../../helpers';

type TProps = {
  data: any;
};

type TStyledProps = {
  direction: string;
  justify?: string;
};

const StyledWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  width: 100%;
  padding: 3em;
  display: grid;
  grid-gap: 4em;
  ${({ theme }) => css`
    @media ${theme.base.media.MD} {
      grid-template-columns: 1fr 30em;
      border-top: ${`0.1em solid #eeeeee`};
    }
  `}
`;

const StyledColumn = styled.div<TStyledProps>`
  display: flex;
  opacity: 0.7;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  gap: 2em;
`;
const StyledLinkList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
const StyledLogo = styled.div`
  width: 5em;
  align-self: start;
`;
const StyledAreaHeader = styled(Body)`
  margin-bottom: 1em;
  line-height: 1em;
`;

const FooterClassic: React.FC<TProps> = ({ data }) => {
  const theme = useTheme();
  const linkLists = groupByProp<any>(data.items, ['link_list']);

  return (
    <StyledWrapper>
      <StyledColumn direction="column">
        <Link href="/" target="_self">
          <StyledLogo>Logo</StyledLogo>
        </Link>
        <Socials size="SM" color={theme.base.shades[4]} />
      </StyledColumn>
      <StyledColumn direction="row" justify="space-between">
        {Object.keys(linkLists).map((area) => (
          <StyledLinkList key={area}>
            <StyledAreaHeader bold color={theme.base.shades[2]}>
              {data.primary[`${area.toLowerCase()}_link_list_header`]}
            </StyledAreaHeader>
            {linkLists[area].map(({ link_url, link_label }) => (
              <Link key={link_label + link_url.url} href={resolveLink(link_url)} target={link_url.target}>
                <Body color={theme.base.shades[3]}>{link_label}</Body>
              </Link>
            ))}
          </StyledLinkList>
        ))}
      </StyledColumn>
    </StyledWrapper>
  );
};

export default FooterClassic;
