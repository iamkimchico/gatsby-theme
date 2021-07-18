import React from 'react';
import styled from 'styled-components';
import Body from './Body';

const StyledWrapper = styled.div`
  /* font-size: 0.7em;
  color: ${colors.black};
  opacity: 0.5;
  position: relative;
  margin-top: ${(props) => spacing[props.margin]};
  margin-bottom: ${(props) => spacing[props.margin]};
  > div {
    position: ${(props) => (props.floating ? 'absolute' : 'relative')};
  } */
`;

const HelpText = ({ children, floating, align, margin }) => (
  <StyledWrapper floating={floating} margin={margin}>
    <span>
      <Body align={align}>{children}</Body>
    </span>
  </StyledWrapper>
);

export default HelpText;
