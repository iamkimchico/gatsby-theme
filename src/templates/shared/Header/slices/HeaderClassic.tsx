import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { useScroll, useViewport } from '../../../../hooks';
import { getColPadding } from '../../../../helpers';
import Burgermenu from '../../Burgermenu/Burgermenu';
import { Link } from '../../../../typography';
import { TSizeNames } from '../../../../types';
import Menu from '../../Menu/Menu';

type TProps = {
  data: any;
};

type TStyledProps = {
  viewport: TSizeNames;
  menuToggled?: boolean;
  scrolled?: boolean;
};

const GlobalStyle = createGlobalStyle<{ menuToggled: boolean }>`
  body {
    overflow: ${({ menuToggled }) => (menuToggled ? 'hidden' : 'visible')};
  }
`;

const StyledHeader = styled.header<TStyledProps>`
  ${({ theme, scrolled, viewport, menuToggled }) => css`
    z-index: ${theme.base.zLevels[10]};
    grid-template-rows: 5em 0.8fr;
    display: grid;
    position: fixed;
    width: 100vw;
    height: 5em;
    align-items: center;
    padding-right: 3em;
    padding-left: 3em;
    transition: height 0.2s ease-in-out;

    ${scrolled &&
    css`
      grid-template-rows: 3em 0.8fr;
      height: 3em;
      padding-right: ${getColPadding('outer-xxx', viewport)};
      padding-left: ${getColPadding('outer-xxx', viewport)};
    `}

    ${menuToggled &&
    css`
      height: 100vh;
    `}

    &:before {
      transition: height 0.2s ease-in-out;
      will-change: height;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0%;
      background-color: ${theme.design.white_color};
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);

      ${scrolled &&
      css`
        height: 100%;
      `}

      ${menuToggled &&
      css`
        height: 100%;
        box-shadow: none;
      `}
    }
  `}
`;

const StyledContent = styled.div`
  width: 100%;
  margin: auto;
  max-width: ${({ theme }) => theme.base.MAXWIDTH};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
`;

const StyledGroup = styled.div`
  grid-auto-flow: column;
  align-items: center;
  display: grid;
  grid-gap: 3em;
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
      <StyledHeader viewport={viewport} scrolled={isScrolled} menuToggled={menuToggled}>
        <StyledContent>
          <StyledGroup />
          <StyledGroup>
            {cta && (
              <Link href={cta.url} target={cta.target} variant="cta" colorScheme="black">
                {cta.label}
              </Link>
            )}
            <Burgermenu onClick={() => setMenuToggled(!menuToggled)} toggled={menuToggled} label="Menu" />
          </StyledGroup>
        </StyledContent>
        {menuToggled && <Menu />}
      </StyledHeader>
    </>
  );
};

export default HeaderClassic;
