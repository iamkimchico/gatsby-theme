import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { TSizeNames } from '../types';
import base from '../styles/base';

export const useViewport = () => {
  const breakpoint = useBreakpoint();
  let result: { size: TSizeNames; index: number } = { size: 'XS', index: 0 };

  if (breakpoint.MX) {
    result = { size: 'MX', index: 5 };
  } else if (breakpoint.XL) {
    result = { size: 'XL', index: 4 };
  } else if (breakpoint.LG) {
    result = { size: 'LG', index: 3 };
  } else if (breakpoint.MD) {
    result = { size: 'MD', index: 2 };
  } else if (breakpoint.SM) {
    result = { size: 'SM', index: 1 };
  } else {
    result = { size: 'XS', index: 0 };
  }

  return result;
};

export const useResize = () => {
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth || 0);

  const handleResize = (e: any) => {
    setWindowWidth(e.currentTarget.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return windowWidth;
};

export const useScroll = () => {
  const [scrollPos, setScrollPos] = useState({ isScrolled: false, top: 0, bottom: 0 });
  const viewport = useViewport();

  const handleScroll = (e: any) => {
    const scrollVal = e.target.scrollingElement.scrollTop;
    let { isScrolled } = scrollPos;

    if (viewport.index < 5) {
      if (scrollVal > 0 && isScrolled === false) {
        isScrolled = true;
      } else if (scrollVal <= 0) {
        isScrolled = false;
      }
    } else if (scrollVal > 75 && isScrolled === false) {
      isScrolled = true;
    } else if (scrollVal <= 75) {
      isScrolled = false;
    }

    setScrollPos({
      isScrolled,
      top: e.target.documentElement.scrollTop,
      bottom: e.target.documentElement.scrollTop + window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPos]);

  return scrollPos;
};

export const useInViewport = (ref: any) => {
  const scrollPos = useScroll();

  if (ref && ref.current) {
    if (scrollPos.bottom > ref.current.offsetTop && scrollPos.top < ref.current.offsetTop + ref.current.offsetHeight) {
      return { isShowing: true, height: scrollPos.bottom - ref.current.offsetTop };
    }
    return { isShowing: false, height: 0 };
  }
  return { isShowing: false, height: 0 };
};

export const useGridEdge = (): string => {
  const viewport = useViewport().size;
  const windowWidth = useResize();
  const maxWidth = parseInt(base.MAXWIDTH.replace('px', ''), 10);

  if (windowWidth > maxWidth) {
    return `${(windowWidth - maxWidth) / 2}px`;
  }

  // if (windowWidth > maxWidth) {
  //   // because the hero is at outer-xxx and not edge on this viewport
  //   if (viewport === 'XL') {
  //     return `${(windowWidth - maxWidth) / 2 + base.colRelation[viewport] * base.fontSize[viewport]}px`;
  //   }

  //   return `${(windowWidth - maxWidth) / 2}px`;
  // }

  return `${base.colRelation[viewport] * base.fontSize[viewport]}px`;
};

export const useFiles = () => {
  const { allFile } = useStaticQuery(graphql`
    query MyQuery {
      allFile {
        edges {
          node {
            relativeDirectory
            name
          }
        }
      }
    }
  `);

  return allFile;
};
