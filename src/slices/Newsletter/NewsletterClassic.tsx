import React from 'react';
import styled from 'styled-components';
import { getColors } from '../../helpers';
import { Form, TextField } from '../../inputs';
import { Heading } from '../../typography';

const StyledWrapper = styled.div`
  grid-column-start: outer-xxx-left;
  grid-column-end: outer-xxx-right;
  margin-top: ${({ theme }) => theme.base.spacing.MD};
  margin-bottom: ${({ theme }) => theme.base.spacing.MD};
  display: grid;
  justify-items: center;
`;

const NewsletterClassic = ({ primary }: any) => {
  const colors = getColors(primary.color_scheme);
  return (
    <StyledWrapper>
      <Heading size="h6" align="center" color={colors.base}>
        {primary.header}
      </Heading>

      <Form id={primary.id} submitMessage={primary.success_message}>
        <TextField
          name="email"
          type="email"
          placeholder={primary.email_placeholder}
          buttonLabel={primary.button_text}
          required
          color={colors.major}
        />
      </Form>
    </StyledWrapper>
  );
};
export default NewsletterClassic;
