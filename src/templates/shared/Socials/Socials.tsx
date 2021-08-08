import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Icon from '../../../icon';
import { TIconNames, TSizeNames, TColorScheme } from '../../../types';
import { Link } from '../../../typography';

type TProps = {
  size: TSizeNames;
  colorScheme: TColorScheme;
};

const StyledWrapper = styled.div<Partial<TProps>>`
  display: flex;

  a {
    width: max-content;
    margin-right: ${({ size }) => (size === 'LG' ? '3em' : size === 'MD' ? '2em' : '1.5em')};
  }
`;

const Socials: React.FC<TProps> = ({ size, colorScheme }) => {
  const { prismicSiteSettings } = useStaticQuery(graphql`
    query Socials {
      prismicSiteSettings {
        data {
          social_channels {
            icon
            name
            url {
              url
              target
            }
          }
        }
      }
    }
  `);

  const channels: any = prismicSiteSettings.data.social_channels;

  return (
    <StyledWrapper colorScheme={colorScheme} size={size}>
      {Object.keys(channels).map((channel) => (
        <Link
          key={channels[channel].name + channels[channel].url.url}
          href={channels[channel].url.url}
          target={channels[channel].url.target}
        >
          <Icon icon={channels[channel].icon.toLowerCase() as TIconNames} colorScheme={colorScheme} size={size} />
        </Link>
      ))}
    </StyledWrapper>
  );
};
export default Socials;
