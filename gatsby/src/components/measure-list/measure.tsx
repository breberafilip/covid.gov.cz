import React from 'react';

import styles from './measure.module.scss';
import Button from '@/components/button';
import I18n from '@/components/i18n';

interface Props {
  title: string;
  description: string;
  area: string;
  validFrom: string;
  validTo: string;
  link: string;
}

const Measure: React.FC<Props> = ({
  title,
  description,
  area,
  validFrom,
  validTo,
  link,
}) => {
  // TODO: Localize
  return (
    <div className={styles.measure}>
      <h3 className={styles.measureTitle}>{title}</h3>
      <p className={styles.measureDescription}>{description}</p>
      <div className={styles.measureDetails}>
        <div>
          <div className={styles.measureDetail}>Platí pro: {area}</div>
          <div className={styles.measureDetail}>
            {validFrom && `Od ${validFrom} `}
            {validTo && `Do ${validTo}`}
          </div>
        </div>
        <Button
          text={I18n('more')}
          variant="outline-yellow"
          href={link}
          className={styles.measureButton}
        />
      </div>
    </div>
  );
};

export default Measure;
