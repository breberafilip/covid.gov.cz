import React from 'react';
import classNames from 'classnames';
import Button, { ButtonVariant } from '@/components/button';
import Col from '@/components/col';
import { BoldedTitle } from '@/components/bolded-title';

import styles from './content-box.module.scss';
import Link from '@/components/link';

interface Props {
  title?: string;
  description?: string;
  boldedTitleCount?: number;
  buttonVariant?: ButtonVariant;
  buttonText?: string;
  buttonHref?: string;
  variant?: string;
  noPadding?: boolean;
}

const ContentBox: React.FC<Props> = ({
  children,
  title,
  boldedTitleCount,
  description,
  buttonVariant,
  buttonText,
  buttonHref,
  variant = '',
  noPadding,
}) => {
  return (
    // contentBox--white
    // contentBox--blue
    <div
      className={classNames(
        styles.contentBox,
        styles[`contentBox--${variant}`],
        noPadding && styles.contentBoxNoPadding,
        'row',
      )}
    >
      <Col col={12}>
        {title && (
          <h2
            className={styles.contentBoxTitle}
            dangerouslySetInnerHTML={{
              __html: title.replace(/<\/?p>/g, ''),
            }}
          />
        )}
        {description && (
          <p className={styles.contentBoxDescription}>{description}</p>
        )}
        {children}
        {buttonText && (
          <Link to={buttonHref}>
            <Button
              variant={buttonVariant}
              text={buttonText}
              className={styles.contentBoxButton}
            />
          </Link>
        )}
      </Col>
    </div>
  );
};

export default ContentBox;
