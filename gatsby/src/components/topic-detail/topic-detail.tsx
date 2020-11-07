import React from 'react';

import Container from '@/components/container';
import Breadcrumb from '@/components/breadcrumb';
import Headline from '@/components/headline';

import styles from './topic-detail.module.scss';

interface IProps {
  breadcrumbItems: React.ComponentProps<typeof Breadcrumb>['items'];
  title: string;
  processedContent: string;
}

const TopicDetail: React.FC<IProps> = ({
  breadcrumbItems,
  title,
  processedContent,
  children,
}) => {
  return (
    <div className={styles.topicDetail}>
      <Container>
        <div className="pt-1">
          <Breadcrumb items={breadcrumbItems} variant="inverse" />
        </div>
        <div className="mt-3">
          <Headline>{title}</Headline>
        </div>
        <article className="bg-white rounded p-2 pb-3 mb-1">
          <div
            dangerouslySetInnerHTML={{
              __html: processedContent,
            }}
          />
          {children}
        </article>
      </Container>
    </div>
  );
};

export default TopicDetail;
