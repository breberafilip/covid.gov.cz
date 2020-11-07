import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { Add, Clear } from '@material-ui/icons';

import styles from './accordion-section.module.scss';
import Button from '@/components/button';

export interface Section {
  title: React.ReactChild;
  text: React.ReactChild;
  className?: string;
}

const AccordionSection: React.FC<Section> = ({ title, text, className }) => {
  const [opened, setOpened] = useState(false);

  const toggleSection = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  return (
    <div className={classNames(styles.section, className)}>
      <div
        className={classNames(
          styles.sectionHeading,
          'd-flex',
          'justify-content-between',
          'align-items-center',
        )}
        onClick={toggleSection}
      >
        {title}
        <Button
          icon={opened ? <Clear /> : <Add />}
          className={classNames(
            styles.sectionButton,
            'd-flex',
            'justify-content-center',
            'align-items-center',
          )}
          variant="yellow"
        />
      </div>
      {opened && <div className={styles.sectionContent}>{text}</div>}
    </div>
  );
};

export default AccordionSection;
