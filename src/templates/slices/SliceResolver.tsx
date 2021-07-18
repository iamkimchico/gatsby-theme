import React from 'react';
import Grid from '../../common/Grid';
import * as sliceComponents from '.';
import { capitalize } from '../../utils';

type TProps = {
  slices: any;
};

const SliceResolver: React.FC<TProps> = ({ slices }) => (
  <>
    {slices.map((slice: any, i: number) => {
      const Component = sliceComponents[capitalize(slice.slice_type) as keyof typeof sliceComponents];
      return (
        <Grid row key={`${i + slice.slice_type}`}>
          <Component {...slice} />
        </Grid>
      );
    })}
  </>
);

export default SliceResolver;
