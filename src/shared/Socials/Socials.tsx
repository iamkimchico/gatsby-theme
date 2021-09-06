import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../../icon';
import { TColors, TIconNames, TSizeNames } from '../../types';
import { Link } from '../../typography';

const query = graphql`
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
`;

type TProps = {
  size: TSizeNames;
  color: string;
  margin?: TSizeNames;
};

const StyledWrapper = styled.div<Partial<TProps>>`
  display: flex;
  ${({ theme, margin }) => css`
    margin-top: ${theme.base.spacing[margin || 'XS']};
    margin-bottom: ${theme.base.spacing[margin || 'XS']};
  `}

  a {
    width: max-content;
    margin-right: ${({ size }) => (size === 'LG' ? '3em' : size === 'MD' ? '2em' : '1.5em')};
  }
`;

const Socials: React.FC<TProps> = ({ size, color, margin }) => {
  const { prismicSiteSettings } = useStaticQuery(query);
  const channels: any = prismicSiteSettings.data.social_channels;

  return (
    <StyledWrapper size={size} margin={margin}>
      {Object.keys(channels).map((channel) => (
        <Link
          key={channels[channel].name + channels[channel].url.url}
          href={channels[channel].url.url}
          target={channels[channel].url.target}
        >
          <Icon icon={channels[channel].icon.toLowerCase() as TIconNames} color={color} size={size} />
        </Link>
      ))}
    </StyledWrapper>
  );
};
export default Socials;
