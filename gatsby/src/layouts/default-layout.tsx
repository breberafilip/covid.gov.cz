import React from 'react';
import classnames from 'classnames';

import Header from '@/components/header';
import Footer from '@/components/footer';
import MainBackground from '@/components/main-background';
import I18n, { TRoute } from '@/components/i18n';

import styles from './default-layout.module.scss';

const DefaultLayout: React.FC = ({ children }) => {
  const measuresRoute = TRoute(I18n('slug_measures'));
  const situationsRoute = TRoute(I18n('slug_situations'));

  return (
    <div className={classnames('body__wrapper', styles.wrapper)}>
      <Header
        navItems={[
          { label: 'Úvod', to: '/' },
          { label: 'Opatření', to: measuresRoute },
          { label: 'Životní situace', to: situationsRoute },
        ]}
      />
      <main>
        <MainBackground
          src="/images/main-content-mobile-bg.jpg"
          alt="Covid Portal"
        />
        <div className={styles.mainInner}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
