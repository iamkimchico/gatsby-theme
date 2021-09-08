import React from 'react';
import styled from 'styled-components';
import Seo from './Seo';
import Grid from './Grid';
import { Footer, Header } from '../shared';
import ScrollBar from '../shared/Scrollbar/Scrollbar';

type TProps = {
  meta: any;
};

const StyledContent = styled(Grid)``;

const PageWrapper: React.FC<TProps> = ({ children, meta }) => (
  <>
    <Seo {...meta} />
    <ScrollBar />
    <Header />
    <StyledContent container>{children}</StyledContent>
    <Grid container>
      <Footer />
    </Grid>
  </>
);

export default PageWrapper;
