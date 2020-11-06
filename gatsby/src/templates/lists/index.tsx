import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Container from '@/components/container';
import I18n from '@/components/i18n';
import { IQuery } from 'graphql-types';
import Layout from '@/layouts/default-layout';
import { Guide } from '@/components/guide';

interface IProps {
  data: IQuery;
}

const Home: React.FC<IProps> = ({ data }) => {
  const { homepage } = data;
  const {
    situation_label,
    situation_text,
    situation_link,
    measure_label,
    measure_link,
    measure_text,
    relationships,
  } = homepage;
  const { measure_items, situation_items } = relationships;

  return (
    <Layout>
      <Helmet
        title={I18n('home') + ' | ' + I18n('covid_portal').toUpperCase()}
      />
      <Container className="pt-3">
        <Guide
          items={situation_items}
          title={situation_label.processed}
          description={situation_text}
          buttonHref={I18n('slug_situations')}
          buttonText={situation_link?.title}
          variant="blue"
        />
        <Guide
          items={measure_items}
          title={measure_label.processed}
          description={measure_text}
          buttonHref={I18n('slug_measures')}
          buttonText={measure_link?.title}
          variant="white"
        />
      </Container>
    </Layout>
  );
};
export default Home;

// fix: pls fix query
export const query = graphql`
  query IndexQuery($langCode: String!) {
    homepage(langcode: { eq: $langCode }) {
      measure_link {
        uri
        title
      }
      moderation_state
      measure_label {
        processed
      }
      measure_text
      situation_label {
        processed
      }
      situation_link {
        uri
        title
      }
      situation_text
      relationships {
        measure_items {
          id
          title
          norm
          valid_from(formatString: "D. M. YYYY")
          valid_to(formatString: "D. M. YYYY")
          path {
            alias
          }
          relationships {
            region {
              name
            }
          }
        }
        situation_items {
          id
          name
          path {
            alias
          }
          relationships {
            field_ref_icon {
              code
            }
          }
        }
      }
    }
  }
`;
