import React from 'react';
import Seo from './Seo';
import Grid from './Grid';
import { Footer, Header } from '../templates/shared';

type TProps = {
  meta:any;
}

const PageWrapper:React.FC<TProps> = ({ children, meta }) => (
  <>
    <Seo {...meta} />
    <Grid container>
      <Header />
      {children}
      <Footer />
    </Grid>
  </>
);

export default PageWrapper;
