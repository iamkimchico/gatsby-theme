import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Body } from '../../typography';
import { useViewport } from '../../hooks';
import { Image } from '../../media';
import { getColors } from '../../helpers';
import Person from '../../shared/Person';

type TStyledProps = {
  duration?: number;
  show?: boolean;
  color?: string;
};

const StyledCarouselWrapper = styled.div`
  ${({ theme }) => css`
    grid-column-start: outer-xx-left;
    grid-column-end: outer-xx-right;
    color: ${theme.design.white_color};
    position: relative;
    margin-bottom: ${theme.base.spacing.MD};
    margin-top: ${theme.base.spacing.MD};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr max-content;

    @media ${theme.base.media.LG} {
      grid-column-start: outer-xxx-left;
      grid-column-end: outer-xxx-right;
      margin-bottom: ${theme.base.spacing.LG};
      margin-top: ${theme.base.spacing.LG};
      color: ${theme.design.black_color};
    }
  `}
`;
const StyledIndicators = styled.div`
  grid-area: 2/1/3/3;
  display: grid;
  grid-gap: 0.5em;
  grid-auto-flow: column;
  margin-top: 0.5em;
  ${({ theme }) => css`
    @media ${theme.base.media.SM} {
      grid-area: 2/1/3/2;
      width: 25em;
      justify-self: right;
      margin-right: 2em;
    }
  `}
`;
const StyledIndicator = styled.div<TStyledProps>`
  ${({ theme, duration, show, color }) => css`
    width: 100%;
    height: 0.2em;
    background-color: ${theme.base.shades[6]};
    position: relative;
    &:after {
      top: 0;
      left: 0;
      position: absolute;
      content: '';
      width: 0%;
      height: 100%;
      animation-duration: ${`${duration}s`};
      animation-name: ${show ? 'grow' : 'none'};
      animation-timing-function: linear;
      animation-fill-mode: forwards;
      background-color: ${color};
    }

    @keyframes grow {
      from {
        width: 0%;
      }
      to {
        width: 100%;
      }
    }
  `}
`;
const StyledSlidesWrapper = styled.div`
  grid-area: 1/1/2/3;
`;
const StyledSlideWrapper = styled.div<TStyledProps>`
  ${({ theme, show }) => css`
    display: ${show ? 'grid' : 'none'};
    grid-template-rows: 1fr;

    @media ${theme.base.media.SM} {
      grid-template-columns: 1fr 1fr;
      grid-gap: 4em;
      min-height: 25em;
    }
  `}
`;

const StyledColumn = styled.div`
  grid-area: 1/1/2/2;
  position: relative;
  min-height: 30em;
  display: grid;
  align-items: end;
  ${({ theme }) => css`
    @media ${theme.base.media.SM} {
      display: grid;
      justify-self: right;
      grid-area: auto;
      width: 25em;
      &:last-child {
        justify-self: left;
      }
    }
  `}
`;
const StyledTextWrapper = styled.div<TStyledProps>`
  ${({ theme, color }) => css`
    display: grid;
    grid-gap: 1rem;
    padding: 4em;
    color: ${color};
    @media ${theme.base.media.SM} {
      padding: 2em;
      color: ${color};
      align-self: center;
    }
  `}
`;

const StyledQuotationMark = styled.div`
  position: absolute;
  width: 7em;
  height: 7em;
  opacity: 0.1;
  top: 2em;
  left: 0;
`;

const TestimonialCarouselClassic = ({ primary, items }) => {
  const [slide, setSlide] = useState(0);
  const viewport = useViewport();
  const slideDuration = 20;
  const colors = getColors(primary.color_scheme);

  const changeSlide = (fromSlide: number) => {
    let nextSlide = fromSlide + 1;

    if (nextSlide > items.length - 1) {
      nextSlide = 0;
    }

    setSlide(nextSlide);
  };

  return (
    <>
      <StyledCarouselWrapper>
        <StyledSlidesWrapper>
          {items.map((testimonial: any, index: number) => (
            <StyledSlideWrapper key={testimonial.paragraph} show={index === slide}>
              <StyledColumn>
                <Image url={testimonial.image.url} alt={testimonial.image.alt} />
              </StyledColumn>
              <StyledColumn>
                <StyledTextWrapper>
                  <Body italic color={colors.black}>
                    {testimonial.paragraph}
                  </Body>
                  <Person type="lowerThird" content={testimonial.author.document.data} color={colors.base} />
                </StyledTextWrapper>
                {viewport.index > 1 && (
                  <StyledQuotationMark>
                    <svg viewBox="0 0 229.98 199.22">
                      <g>
                        <path
                          fill={colors.major}
                          d="M0,0h106.2v81.79c0,30.11-6.27,53.92-18.8,71.41c-12.54,17.5-33.94,32.84-64.21,46.02L0,155.76
		c18.88-8.79,31.86-17.54,38.94-26.25c7.08-8.71,11.02-19,11.84-30.88H0V0z M123.78,0h106.2v81.79c0,30.11-6.27,53.92-18.8,71.41
		c-12.54,17.5-33.94,32.84-64.21,46.02l-23.19-43.46c18.88-8.79,31.86-17.54,38.94-26.25c7.08-8.71,11.02-19,11.84-30.88h-50.78V0z"
                        />
                      </g>
                    </svg>
                  </StyledQuotationMark>
                )}
              </StyledColumn>
            </StyledSlideWrapper>
          ))}
        </StyledSlidesWrapper>
        <StyledIndicators>
          {items.map((testimonial: any, index: number) => (
            <StyledIndicator
              key={testimonial.image.url}
              show={index === slide}
              duration={slideDuration}
              onAnimationEnd={() => changeSlide(index)}
              color={colors.base}
            />
          ))}
        </StyledIndicators>
      </StyledCarouselWrapper>
    </>
  );
};

export default TestimonialCarouselClassic;
