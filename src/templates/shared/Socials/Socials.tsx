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
    margin-right: ${(props) => (props.size === 'LG'
    ? '3em'
    : props.size === 'MD'
      ? '2em'
      : '1.5em')};
  }
`;

const Socials: React.FC<TProps> = ({ size, colorScheme }) => {
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
    <StyledWrapper colorScheme={colorScheme} size={size}>
      {Object.keys(channels).map((type) => {
        if (channels[type].url) {
          return (
            <Link
              key={type + channels[type].url}
              href={channels[type].url}
              target={channels[type].target}
              colorScheme="black"
            >
              <Icon icon={type as TIconNames} colorScheme={colorScheme} size={size} />
            </Link>
          );
        }
        return <></>;
      })}
    </StyledWrapper>
  );
};

export default Socials;
