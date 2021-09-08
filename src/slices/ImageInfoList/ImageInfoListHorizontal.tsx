import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useViewport } from '../../hooks';
import { Body, Heading } from '../../typography';
import { BackgroundImage, Image } from '../../media';
import { Button } from '../../inputs';
import { getColors } from '../../helpers';

const StyledWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  margin-top: ${({ theme }) => theme.base.spacing.SM};
  margin-bottom: 8em;
`;

const StyledItems = styled.div`
  overflow: hidden;
`;
const StyledItem = styled.div<{ show: boolean }>`
  width: 100%;
  display: ${({ show }) => (show ? 'grid' : 'none')};
  grid-gap: 1em;

  ${({ theme }) => css`
    figure {
      height: 20em;
    }

    @media${theme.base.media.SM} {
      figure {
        height: 25em;
      }
    }
  `}
`;

const StyledTextWrapper = styled.div`
  display: grid;

  ${({ theme }) => css`
    @media${theme.base.media.SM} {
      grid-template-columns: 1;
    }
  `}
`;

const StyledControls = styled.div`
  width: max-content;
  display: flex;
  margin: auto;
  margin-top: 1em;
  gap: 1em;
  flex-direction: row;
  font-size: 0.9em;
`;

const ImageInfoListHorizontal: React.FC = ({ primary, items }: any) => {
  const [selected, setSelected] = useState<number>(0);
  const viewport = useViewport().index;
  const colors = getColors(primary.color_scheme);
  return (
    <StyledWrapper>
      <StyledItems>
        {items.map((item: any, i: number) => (
          <StyledItem show={selected === i} key={item.paragraph}>
            <BackgroundImage url={item.image.url} position="center center" />
            <StyledTextWrapper>
              <Heading size="h3" align="center" color={colors.major} margin="XS">
                {primary.header}
              </Heading>
              <Body align="center" color="black">
                {item.paragraph}
              </Body>
            </StyledTextWrapper>
          </StyledItem>
        ))}
      </StyledItems>
      <StyledControls>
        {items.map((item: any, i: number) => (
          <Button
            selected={i === selected}
            shape="rounded"
            variant="soft"
            key={item.header}
            color={colors.major}
            onClick={() => setSelected(i)}
          >
            {item.header}
          </Button>
        ))}
      </StyledControls>
    </StyledWrapper>
  );
};

export default ImageInfoListHorizontal;
