import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import Grid from '../../common/Grid';
import { Body, Heading } from '../../typography';
import Arrow from '../Arrow/Arrow';
import { useResize } from '../../hooks';
import { getColors } from '../../helpers';

type TProps = {
  header: string;
  paragraph: string;
  itemRef: React.RefObject<HTMLDivElement>;
  color: string;
};

type TStyledProps = {
  itemWidth: number;
  selected: number;
  page: number;
};

const StyledWrapper = styled.div`
  height: 40em;
  display: grid;
`;

const StyledHeader = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 1em;
`;

const StyledCarousel = styled(Grid)``;
const StyledItems = styled.div<TStyledProps>`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  overflow: hidden;
  display: flex;
  padding-top: 2em;
  margin-right: auto;
  margin-left: auto;
  /* background-color: yellow; */
  position: relative;

  ${({ theme }) => css`
    width: 17.5em;
    @media${theme.base.media.SM} {
      width: 37em;
    }
    @media${theme.base.media.MD} {
      width: 56.5em;
    }
  `}

  // Fading
  /* &:after {
    position: absolute;
    content: '';
    height: 100%;
    right: 0;
    top: 0;
    background-image: linear-gradient(to right, transparent, white);
    width: 5em;
  } */

  > div {
    ${({ selected, itemWidth, page }) => css`
      transition: all 0.2s ease-in-out;
      transform: ${`translateX(-${itemWidth * page}px)`};
      margin-top: 0;
      &:nth-child(${selected + 1}) {
        margin-top: -1em;
      }
    `}
  }
`;

const StyledDots = styled.div`
  display: flex;
  justify-self: center;
  gap: 1em;
  margin-top: 1em;
`;

const StyledDot = styled.div<{ active: boolean }>`
  width: 0.4em;
  height: 0.4em;
  border-radius: 0.4em;
  background-color: ${({ theme, active }) => theme.base.shades[active ? 3 : 4]};
`;

const Carousel: React.FC<TProps> = ({ header, paragraph, children, itemRef, color }) => {
  const itemsWrapper = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(React.Children.count(children));
  const [moveWidth, setMoveWidth] = useState(0);
  const windowWidth = useResize();
  const colors = getColors(color);

  const handleChange = (to: number) => {
    if (selected + to < 0) {
      setSelected(0);
      setPage(0);
    } else if (selected + to > lastPage) {
      setPage(lastPage);
      if (selected + to > React.Children.count(children) - 1) {
        setSelected(React.Children.count(children) - 1);
      } else {
        setSelected(selected + to);
      }
    } else {
      setPage(selected + to);
      setSelected(selected + to);
    }
  };

  useEffect(() => {
    if (itemRef.current && itemsWrapper.current) {
      const itemWidthAndMargin =
        parseInt(
          window.getComputedStyle(itemRef.current, null).getPropertyValue('margin-right').replace('px', ''),
          10,
        ) + itemRef?.current?.offsetWidth;

      const wrapperWidth = itemsWrapper.current.offsetWidth;
      const itemsVisible = wrapperWidth / itemWidthAndMargin;
      setLastPage(React.Children.count(children) - Math.round(itemsVisible));
      setMoveWidth(itemWidthAndMargin);
    }
  }, [windowWidth]);

  return (
    <StyledWrapper>
      <StyledHeader>
        <Heading size="h3" color={colors.major} align="center">
          {header}
        </Heading>
        {paragraph && <Body color={colors.black}>{paragraph}</Body>}
      </StyledHeader>

      <StyledCarousel>
        <Arrow direction="left" onClick={() => handleChange(-1)} />
        <StyledItems ref={itemsWrapper} itemWidth={moveWidth} selected={selected} page={page}>
          {children}
        </StyledItems>
        <Arrow direction="right" onClick={() => handleChange(+1)} />
      </StyledCarousel>
      <StyledDots>
        {React.Children.map(children, (_child, i) => (
          <StyledDot active={i === selected} />
        ))}
      </StyledDots>
    </StyledWrapper>
  );
};

export default Carousel;
