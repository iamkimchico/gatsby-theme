import React from 'react';
import styled from 'styled-components';
import { Image } from '../../media';
import Heading from '../../typography/Heading';
import { Body } from '../../typography';

type TProps = {
  portrait: any;
  job_title: string;
  name: string;
  mail: string;
  showMail: boolean;
  color: string;
};

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 1em;
  width: max-content;
  margin-top: 1em;
`;

const StyledImage = styled.div`
  width: 3em;
  height: 3em;
  border-radius: 3em;
  overflow: hidden;
`;

const StyledNameWrapper = styled.div`
  text-transform: capitalize;
  align-self: center;
  justify-self: left;
  > h6 {
    font-weight: 900;
  }
`;

const PersonLowerThird: React.FC<TProps> = ({ portrait, job_title, name, mail, showMail, color }) => (
  <StyledWrapper>
    <StyledImage>
      <Image url={portrait.url} alt={name} />
    </StyledImage>

    <StyledNameWrapper>
      <Heading size="h6" color={color}>
        {job_title}
      </Heading>
      <Body size="SM" color={color}>
        {name}
      </Body>
      {showMail && (
        <Body size="SM" color={color}>
          {mail}
        </Body>
      )}
    </StyledNameWrapper>
  </StyledWrapper>
);

export default PersonLowerThird;
