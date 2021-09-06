import React from 'react';
import styled from 'styled-components';
import Grid from '../common/Grid';
import * as sliceMap from './SliceMap';
import { capitalize, underscoreToCamelCase } from '../utils';
import { Body } from '../typography';

type TProps = {
  slices: any;
};

const StyledError = styled.div`
  grid-column-start: inner-left;
  grid-column-end: inner-right;
  height: 5em;
  background-color: #eeeeee;
  border-radius: 1em;
  color: red;
  padding-left: 2em;
  display: grid;
  align-items: center;
`;

const SliceResolver: React.FC<TProps> = ({ slices }) => (
  <>
    {slices.map((slice: any, i: number) => {
      const type = capitalize(underscoreToCamelCase(slice.slice_type));
      const Component = sliceMap[type as keyof typeof sliceMap];
      if (Component) {
        return (
          <Grid row key={`${i + slice.slice_type}`}>
            <Component {...slice} />
          </Grid>
        );
      }

      console.log(Component);

      return (
        <Grid row key={`error ${slice.slice_type}`}>
          <StyledError>
            <Body color="black">ERROR: Couldnt find component for {slice.slice_type}</Body>
          </StyledError>
        </Grid>
      );
    })}
  </>
);

export default SliceResolver;
