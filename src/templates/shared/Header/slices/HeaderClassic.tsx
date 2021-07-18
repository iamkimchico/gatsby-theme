import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { useScroll, useViewport } from '../../../../hooks';
import { getGridGap, getColPadding } from '../../../../helpers';
import Burgermenu from '../../Burgermenu/Burgermenu';
import { Link } from '../../../../typography';
import { TSizeNames } from '../../../../types';

type TProps = {
  data:any;
}

type TStyledProps = {
  viewport: TSizeNames;
  menuToggled?:boolean;
  scrolled?:boolean;
}

const GlobalStyle = createGlobalStyle<{menuToggled:boolean}>`
  body {
    overflow:${({ menuToggled }) => (menuToggled ? 'hidden' : 'visible')};
  }
`;

const StyledHeaderWrapper = styled.div<TStyledProps>`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  display: grid;
  align-items: center;
  position: relative;

  ${({ theme, viewport }) => css`
    height: ${`calc(${getGridGap(viewport)} / 2)`};
    top: ${`calc(${getGridGap(viewport)} / 2)`};
    height: ${`calc(${getGridGap(viewport)})`};
    z-index: ${theme.base.zLevels[9]};
  `}
`;

const StyledTopWrapper = styled.div<TStyledProps>`
  z-index: ${({ theme }) => theme.base.zLevels[10]};
  position: absolute;
  will-change: opacity;
  width: 100%;

  ${({ scrolled, menuToggled, theme, viewport }) =>
    scrolled &&
    css`
      left: 0;
      top: 0;
      width: 100vw;
      position: fixed;
      background-color: ${menuToggled ? 'none' : theme.design.white_color};
      padding-right: ${getColPadding('outer-xxx', viewport)};
      padding-left: ${getColPadding('outer-xxx', viewport)};
      padding-bottom: 1.2em;
      padding-top: 1.2em;
      box-shadow: ${menuToggled ? 'none' : '0px 0px 10px 0px rgba(0, 0, 0, 0.1)'};
    `}
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  height: 100%;
  margin: auto;

  ${({ theme }) => css`
    @media ${theme.base.media.MX} {
      max-width: ${theme.base.MAXWIDTH};
    }
  `}
`;

const StyledGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 3em;
  align-items: center;
`;

const HeaderClassic: React.FC<TProps> = ({ data }) => {
  const [menuToggled, setMenuToggled] = useState(false);
  const viewport = useViewport().size as TSizeNames;
  const { isScrolled } = useScroll();
  const cta =
    data.cta_link_label && data.cta_page_link_url
      ? {
          label: data.cta_link_label,
          url: data.cta_page_link_url.slug,
          target: data.cta_page_link_url.target,
        }
      : null;

  return (
    <>
      <GlobalStyle menuToggled={menuToggled} />
      <StyledHeaderWrapper viewport={viewport}>
        <StyledTopWrapper viewport={viewport} scrolled={isScrolled} menuToggled={menuToggled}>
          <StyledContent>
            <StyledGroup />
            <StyledGroup>
              {cta && (
                <Link href={cta.url} target={cta.target} variant="cta" style="primary">
                  {cta.label}
                </Link>
              )}
              <Burgermenu onClick={() => setMenuToggled(!menuToggled)} toggled={menuToggled} label="Menu" />
            </StyledGroup>
          </StyledContent>
        </StyledTopWrapper>
      </StyledHeaderWrapper>
    </>
  );
};

export default HeaderClassic;
