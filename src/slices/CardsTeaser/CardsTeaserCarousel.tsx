import React, { useRef } from 'react';

import styled, { css } from 'styled-components';
import { getColors } from '../../helpers';
import { Button } from '../../inputs';
import { Image } from '../../media';
import { Heading, Link } from '../../typography';
import { Carousel } from '../../shared';

const StyledWrapper = styled.div`
  grid-column-start: outer-xx-left;
  grid-column-end: outer-xx-right;
  display: grid;
  ${({ theme }) => css`
    margin-top: ${theme.base.spacing.LG};
    margin-bottom: ${theme.base.spacing.LG};
    @media${theme.base.media.MD} {
      grid-column-start: outer-xxx-left;
      grid-column-end: outer-xxx-right;
    }
  `}
`;

const StyledCard = styled.div`
  flex-basis: 1;
  flex-shrink: 0;
  width: 17.5em;
  height: 28em;
  margin-right: 2em;
  display: grid;
  border-radius: 0.5em;
  overflow: hidden;
  > * {
    grid-area: 1/1/2/2;
  }
`;
const StyledContent = styled.div`
  display: grid;
  justify-items: center;
  position: relative;
  grid-gap: 1em;
  align-self: end;
  justify-self: center;
  padding-bottom: 2em;
`;

const CardsTeaserCarousel: React.FC = ({ primary, items }: any) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const colors = getColors(primary.color_scheme);

  return (
    <StyledWrapper>
      <Carousel header={primary.header} paragraph={primary.paragraph} itemRef={itemRef} color={primary.color_scheme}>
        {items.map((item: any) => (
          <StyledCard key={item.header} ref={itemRef}>
            <Image src={item.image} alt={item.image.alt} />
            <StyledContent>
              <Heading size="h5" color={colors.white}>
                {item.header}
              </Heading>
              <Link href={item.button_link.url} target={item.button_link.target}>
                <Button shape="pill" color={colors.major}>
                  {item.button_text}
                </Button>
              </Link>
            </StyledContent>
          </StyledCard>
        ))}
      </Carousel>
    </StyledWrapper>
  );
};

export default CardsTeaserCarousel;
