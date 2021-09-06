import React from 'react';
import styled, { css } from 'styled-components';
import { getColors } from '../../helpers';
import Icon from '../../icon';
import { Body, Heading } from '../../typography';
import { replaceEach } from '../../utils';

const StyledWrapper = styled.div`
  ${({ theme }) => css`
    grid-column-start: outer-xxx-left;
    grid-column-end: outer-xxx-right;
    display: grid;
    grid-gap: 6em;
    margin-bottom: ${theme.base.spacing.XL};
    margin-top: ${theme.base.spacing.MD};
    justify-self: center;

    @media ${theme.base.media.MD} {
      width: 100%;
      grid-column-start: outer-xx-left;
      grid-template-columns: 1fr 1fr 1fr;
      justify-self: left;
    }
    @media ${theme.base.media.LG} {
      grid-column-start: outer-xx-left;
    }
  `}
`;
const StyledColumnWrapper = styled.div<{ justify: string }>`
  display: grid;
  grid-template-rows: max-content max-content max-content;
  grid-gap: 1em;
  max-width: 20em;
  justify-self: ${({ justify }) => justify};
  svg {
    justify-self: left;
  }
`;
const StyledParagraphWrapper = styled.div``;

const UspClassic = ({ primary, items }: any) => {
  const { icon_size, justify } = primary;
  const colors = getColors(primary.color_scheme);
  return (
    <StyledWrapper>
      {items.map((item: any, i: number) => (
        <StyledColumnWrapper key={item.header} justify={justify?.toLowerCase()}>
          <Icon
            icon={item.icon}
            size={icon_size === 'Big' ? 'LG' : icon_size === 'Medium' ? 'MD' : 'SM'}
            colorScheme={colors}
          />
          <Heading color={colors.black} size="h5">
            {item.header}
          </Heading>
          <StyledParagraphWrapper>
            <Body color={colors.black}>
              <p
                dangerouslySetInnerHTML={{
                  __html: replaceEach(item.paragraph, '\n', '<br>'),
                }}
              />
            </Body>
          </StyledParagraphWrapper>
        </StyledColumnWrapper>
      ))}
    </StyledWrapper>
  );
};

export default UspClassic;
