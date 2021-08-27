import React from 'react';
import styled from 'styled-components';
import Seo from './Seo';
import Grid from './Grid';
import { Footer, Header } from '../shared';

type TProps = {
  meta: any;
};

const StyledContent = styled(Grid)`
  /* margin-top: 5em; */
`;

const PageWrapper: React.FC<TProps> = ({ children, meta }) => (
  <>
    <Seo {...meta} />
    <Header />
    <StyledContent container>{children}</StyledContent>
    <Grid container>
      <Footer />
    </Grid>
  </>
);

export default PageWrapper;
