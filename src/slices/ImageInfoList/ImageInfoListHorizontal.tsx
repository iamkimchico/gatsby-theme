import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useViewport } from '../../hooks';
import { Body, Heading } from '../../typography';
import { Image } from '../../media';
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
  display: ${({ show }) => (show ? 'block' : 'none')};
  figure {
    height: 20em;
  }
`;

const StyledTextWrapper = styled.div`
  max-width: 50em;
  margin: auto;
  h3 {
    margin-top: 0.4em;
  }
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const StyledControls = styled.div`
  width: max-content;
  display: flex;
  margin: auto;
  margin-top: 1em;
  gap: 3em;
  flex-direction: row;
`;

const ImageInfoListHorizontal: React.FC = ({ primary, items }: any) => {
  const [selected, setSelected] = useState<number>(0);
  const viewport = useViewport().index;
  const colors = getColors(primary.color_scheme);
  return (
    <StyledWrapper>
      <Heading size="h3" align="center" color={colors.major} margin="SM">
        {primary.header}
      </Heading>
      <StyledItems>
        {items.map((item: any, i: number) => (
          <StyledItem show={selected === i} key={item.paragraph}>
            <Image
              url={item.image.url}
              size={viewport > 2 ? 'cover' : 'contain'}
              position="center center"
              description={item.image_description}
              alt=""
            />
            <StyledTextWrapper>
              <Body align="center" color="black" margin="SM">
                {item.paragraph}
              </Body>
            </StyledTextWrapper>
          </StyledItem>
        ))}
      </StyledItems>
      <StyledControls>
        {items.map((item: any, i: number) => (
          <Button
            shape="pill"
            key={item.header}
            color={selected === i ? colors.major : colors.base}
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
