import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleNavMenu } from '../../state/reducers/global';
import { media } from '../../constants/breakpoints';
import { colors, shades } from '../../constants/colors';
import { MAXWIDTH, getGridLayout, zLevels } from '../../constants/grid';
import Socials from '../elements/Socials';
import { Link, Body, Heading } from '../typography';
import { useViewport } from '../../hooks';
import Icon from '../../icon';

const StyledWrapper = styled.div`
  position: fixed;
  left: 0;
  top: ${(props) => (props.show ? '0' : '-100vh')};
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => colors[props.theme]};
  transition: all 0.5s ease-in-out;
  z-index: ${zLevels[8]};
`;
const StyledInnerWrapper = styled.div`
  display: grid;
  max-width: ${MAXWIDTH};
  height: 100%;
  margin: auto;
  grid-template-columns: ${(props) => getGridLayout(props.viewport.size)};
`;

const StyledMenuWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  opacity: ${(props) => (props.show ? '1' : '0')};
  display: flex;
  flex-direction: column;
  gap: 4em;
  padding-top: 1em;

  @media ${media.xlarge} {
    display: grid;
    grid-template-columns: 30em 1fr;
  }
  @media ${media.xxlarge} {
    grid-template-columns: 30em 1fr;
  }
  @media ${media.max} {
    grid-column-start: edge-left;
    grid-column-end: edge-right;
  }
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  flex-direction: column;
  color: ${colors.white};
  @media ${media.large} {
    gap: 2em;
    flex-direction: row;
  }
  @media ${media.xlarge} {
    h3 {
      font-size: 4.5em;
    }
    gap: 4em;
    justify-content: flex-end;
    flex-direction: row;
    align-self: center;
  }
`;
const StyledLinkList = styled.div`
  display: flex;
  flex-direction: column;
  @media ${media.large} {
    gap: 0.5em;
  }
`;
const StyledAreaHeader = styled(Heading)`
  @media ${media.large} {
    font-weight: bold;
    line-height: 1em;
    color: ${shades.gray50};
  }
`;

const StyledLink = styled(Link)`
  font-size: 2em;
  color: ${colors.white};
`;

export default function (data) {
  const dispatch = useDispatch();
  const navMenuToggled = useSelector((state) => state.global.navMenuToggled);
  const viewport = useViewport();
  const links = {
    linksLeft: data.linksLeft,
    linksMiddle: data.linksMiddle,
    linksRight: data.linksRight,
  };

  const renderLink = (link, i) => (
    <span key={i + link.label}>
      {link.url?._linkType === 'Link.document' && (
        <Link to={link.url.path} onClick={() => dispatch(toggleNavMenu(false))}>
          <Heading size="h2">{link.label}</Heading>
        </Link>
      )}

      {link.url?._linkType === 'Link.web' && (
        <a href={link.url.url} target={link.url.target}>
          <Heading size="h2">{link.label}</Heading>
        </a>
      )}
    </span>
  );

  return (
    <StyledWrapper show={navMenuToggled} theme="darkBlue">
      <StyledInnerWrapper viewport={viewport}>
        <StyledMenuWrapper show={navMenuToggled}>
          <StyledColumn direction="column">
            <div>
              <Heading size={viewport.index > 3 ? 'h1' : 'h3'} theme="blue" margin="small">
                Et hjerte for Gud og mennesker
              </Heading>

              <Socials content={data.socials} size="big" theme="blue" />
            </div>
          </StyledColumn>
          <StyledColumn direction="row" justify="space-between">
            {Object.keys(links).map((area) => (
              <StyledLinkList onClick={() => dispatch(toggleNavMenu(false))}>
                {viewport.index > 1 && (
                  <StyledAreaHeader size="h4">{data[`header${area.replace('links', '')}`]}</StyledAreaHeader>
                )}
                {links[area].map((link) => (
                  <StyledLink href={link.url.path}>{link.label}</StyledLink>
                ))}
              </StyledLinkList>
            ))}
          </StyledColumn>
        </StyledMenuWrapper>
      </StyledInnerWrapper>
    </StyledWrapper>
  );
}
