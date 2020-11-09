import React, { ReactElement } from 'react';
import classnames from 'classnames';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Alert } from '@/components/alert';
import I18n from '@/components/i18n';
import styles from './default-layout.module.scss';
import { ISitePageContext } from 'graphql-types';

interface IProps {
  children: ReactElement[];
  pageContext: ISitePageContext;
}

const DefaultLayout: React.FC<IProps> = ({ children, pageContext }) => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "covid-portal-compressed.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 80) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
      desktopImage: file(relativePath: { eq: "covid-portal-compressed.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
      currentBuildDate {
        currentDate
      }
    }
  `);
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];

  return (
    <div className={classnames('body__wrapper', styles.wrapper)}>
      {process.env.GATSBY_VERCEL ? (
        <Alert
          message={
            'Poslední úspěšný build proběhl v ' +
            new Date(data.currentBuildDate.currentDate).toLocaleTimeString(
              'cs-CZ',
              {
                hour: '2-digit',
                minute: '2-digit',
                timeZone: 'Europe/Prague',
              },
            )
          }
        />
      ) : (
        <></>
      )}
      <div>
        <div className={styles.overflow}>
          <Img fluid={sources} className={styles.bkgPhoto} />
        </div>
        <Header
          pageContext={pageContext}
          navItems={[
            { label: I18n('home'), to: '/' },
            { label: I18n('life_situations'), to: I18n('slug_situations') },
            { label: I18n('current_measures'), to: I18n('slug_measures') }, // TODO: přidat podmínku pouze pokud je na HP obsah
          ]}
        />

        <main className={styles.main}>
          <div className={styles.mainInner}>{children}</div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
export const query = graphql`
  query {
    currentBuildDate {
      currentDate
    }
  }
`;
