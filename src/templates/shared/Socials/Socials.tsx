import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Icon from '../../../icon';
import { TIconNames, TSizeNames, TStyleNames } from '../../../types';
import { Link } from '../../../typography';

type TProps = {
  size:TSizeNames;
  style:TStyleNames;
}

const StyledWrapper = styled.div<Partial<TProps>>`
  display: flex;
  a {
    width: max-content;
    margin-right: ${(props) => (props.size === 'LG' ? '3em' : props.size === 'MD' ? '2em' : '1.5em')};
  }
`;

const Socials:React.FC<TProps> = ({ size, style }) => {
  const { prismicSiteSettings } = useStaticQuery(graphql`
    query socials {
      prismicSiteSettings {
        data {
          facebook {
            url
            target
          }
          instagram {
            target
            url
          }
          twitter {
            url
            target
          }
          youtube {
            url
            target
          }
        }
      }
    }
  `);

  const channels = prismicSiteSettings.data;
  return (
    <StyledWrapper style={style} size={size}>
      {Object.keys(channels).map((type, index) => {
        if (channels[type].url)
          return (
            <Link key={index} href={channels[type].url} target={channels[type].target} style="black">
              <Icon icon={type as TIconNames} style={style} size={size} />
            </Link>
          );
      })}
    </StyledWrapper>
  );
};

export default Socials;
