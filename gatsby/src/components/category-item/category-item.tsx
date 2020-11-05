import { KeyboardArrowRight } from '@material-ui/icons';
import Link from '@/components/link';
import ContentIcon from '@/components/content-icon/content-icon';
import React, { FC } from 'react';

import styles from './category-item.module.scss';

type Props = {
  name: string;
  path: string;
};

const CategoryItem: FC<Props> = ({ name, path }) => {
  return (
    <Link to={path} className={styles.categoryItem}>
      <ContentIcon className={styles.categoryItemIcon} />
      <span className={styles.categoryItemTitle}>{name}</span>
      <KeyboardArrowRight style={{ fontSize: 16 }} className="color-yellow" />
    </Link>
  );
};

export default CategoryItem;
