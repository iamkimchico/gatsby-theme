import React from 'react';
import styled from 'styled-components';

type TProps = {
  settings:any;
}

const StyledWrapper = styled.div``;

const Menu:React.FC<TProps> = ({ settings }) => {
  console.log(settings);
  // const data = useStaticQuery(graphql``);

  // const content = data.prismicNavigation.data.body[0];
  // const Slice = slices[content.slice_type];

  return <StyledWrapper>{/* <Slice data={content} settings={settings} /> */}</StyledWrapper>;
};

export default Menu;
