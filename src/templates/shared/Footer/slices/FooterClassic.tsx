import React from 'react';
import styled, { css } from 'styled-components';
import { groupByProp } from '../../../../utils';
import { Body, Link } from '../../../../typography';
import { Socials } from '../..';

type TProps = {
  data:any;
}

type TStyledProps = {
  direction:string;
  justify?:string;
}

const StyledWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  width: 100%;
  padding: 3em;
  display: grid;
  grid-gap: 4em;
  ${({ theme }) => css`
    @media ${theme.base.media.medium} {
      grid-template-columns: 1fr 30em;
      border-top: ${`0.1em solid ${theme.base.shades.gray60}`};
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

const FooterClassic:React.FC<TProps> = ({ data }) => {
  const linkLists = groupByProp<any>(data.items, ['link_list']);

  return (
    <StyledWrapper>
      <StyledColumn direction="column">
        <StyledLogo>Logo</StyledLogo>
        <Socials size="SM" style="black" />
      </StyledColumn>
      <StyledColumn direction="row" justify="space-between">
        {Object.keys(linkLists).map((area) => (
          <StyledLinkList key={area}>
            <StyledAreaHeader bold style="primary" >{data.primary[`${area}_link_list_header`]}</StyledAreaHeader>
            {linkLists[area].map(({ link_url, link_label }, index) => (
              <Link key={index + link_url.url} href={link_url.url} target={link_url.target} style="black">
                {link_label}
              </Link>
            ))}
          </StyledLinkList>
        ))}
      </StyledColumn>
    </StyledWrapper>
  );
};

export default FooterClassic;
