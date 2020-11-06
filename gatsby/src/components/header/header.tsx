import React, { useCallback, useState } from 'react';
import classnames from 'classnames';
import Link from '@/components/link';

import Container from '../container';
import Row from '../row';
import Col from '../col';

import classes from './header.module.scss';

import headerLogo from './header-logo.svg';
import { HeaderLocaleSelect } from './header-locale-select';
import I18n, { TRoute } from '@/components/i18n';
import SearchEngine from '@/components/search-engine';
import SearchBox from '@/components/search-box';

interface NavItem {
  label: string;
  to: string;
}

interface Props {
  navItems: NavItem[];
}

export const locales = ['cs', 'en'];

// const checkSearchResults = () => {
//   const searchInput = document.querySelector('.search__input');
//   const searchInputValue = searchInput[0].value;
//   const searchList = document.querySelector('.search__results');

//   if (searchInput) {
//     searchInput.addEventListener('keyup', function () {
//       if (searchInputValue === '') {
//         searchList.classList.add('hidden');
//       }
//     });
//   }
// };

// checkSearchResults();

const Header: React.FC<Props> = ({ navItems }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'unset' : 'hidden';
  }, [isOpen]);

  const [activeLocale, setLocale] = useState(locales[0]);

  return (
    <div className={classes.header} role="banner">
      <Container>
        <Row alignItems="center" className={classes.header__inner}>
          {/* LOGO */}
          <Col col={7} colMd={3} colLg={3}>
            <Link to="/" label={'COVID PORTAL - ' + I18n('home')}>
              <img src={headerLogo} />
            </Link>
          </Col>
          {/* MOBILE TOGGLE */}
          <Col
            col={5}
            className={classnames(
              classes.nav__toggleWrapper,
              'd-md-none text-right',
            )}
          >
            {/* MENU */}
            <div
              className={classnames(
                classes.nav__toggle,
                isOpen && classes['nav__toggle--open'],
              )}
              onClick={toggleOpen}
            >
              <span />
              <span />
              <div>
                {(isOpen
                  ? I18n('menu_close')
                  : I18n('menu_open')
                ).toUpperCase()}
              </div>
            </div>
          </Col>
          {/* DESKTOP NAV & SEARCH */}
          <Col col={12} colMd={8} colLg={9}>
            <Row alignItems="center">
              {/* NAVIGATION */}
              <Col col={12} colLg={8} className="d-none d-md-block">
                <div className={classnames(classes.navigation, 'navigation')}>
                  <ul className={classnames('nav nav--primary')}>
                    {navItems.map(({ label, to }) => (
                      <li className={classnames('nav__item')} key={label}>
                        <Link
                          to={to}
                          className={classnames('nav__link', classes.nav__link)}
                          activeClassName="active"
                          partiallyActive={to !== '/'}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              {/* SEARCH */}
              <Col col={12} colLg={4} className="ml-auto">
                <SearchEngine>
                  {({ onSearch, searchResults }) => (
                    <div style={{ position: 'relative' }}>
                      <SearchBox onSearch={onSearch} />
                      <div
                        className={classnames(
                          'search__results',
                          classes.search__results,
                        )}
                      >
                        {searchResults
                          ? searchResults.map((searchItem) => (
                              <Link key={searchItem.id} to={searchItem.path}>
                                {searchItem.title}
                              </Link>
                            ))
                          : ''}
                      </div>
                    </div>
                  )}
                </SearchEngine>
              </Col>
            </Row>
          </Col>
          {/* MOBILE NAV */}
          <div
            className={classnames(
              classes.nav__mobile,
              isOpen && classes['nav__mobile--open'],
              'd-md-none',
            )}
          >
            {navItems.map(({ label, to }) => (
              <Link
                to={to}
                key={label}
                className={classnames(classes.nav__mobileLink, 'container')}
                activeClassName={classes['nav__mobileLink--active']}
                partiallyActive={to !== '/'}
              >
                {label}
              </Link>
            ))}
            {/* {locales.map((locale, index) => (
              <Link
                to="/"
                onClick={() => setLocale(locale)}
                key={index}
                className={classnames(
                  classes.nav__mobileLink,
                  index === 0 && 'mt-auto',
                  locale === activeLocale && classes['nav__mobileLink--active'],
                )}
              >
                {locale}
              </Link>
            ))} */}
            {TRoute('/') !== '/' ? (
              <Link
                to="/"
                noTR
                className={classnames(
                  classes.nav__mobileLink,
                  'mt-auto',
                  'container',
                )}
              >
                Čeština
              </Link>
            ) : (
              <Link
                to="/en/"
                noTR
                className={classnames(
                  classes.nav__mobileLink,
                  'mt-auto',
                  'container',
                )}
              >
                English
              </Link>
            )}
          </div>
          {/* DESKTOP LOCALE SELECT */}
          <HeaderLocaleSelect
            activeLocale={activeLocale}
            onLocaleChange={setLocale}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Header;
