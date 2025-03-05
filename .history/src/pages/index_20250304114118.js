import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function DocumentationSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className="card-demo margin-vert--sm">
              <div className="card">
                <div className="card__header">
                  <h3>ARMS</h3>
                </div>
                <div className="card__body">
                  <p>Advanced Resource Management System documentation and API reference.</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary"
                    to="/docs/arms/intro">
                    Documentation
                  </Link>
                  <Link
                    className="button button--secondary"
                    to="/api/arms">
                    API Reference
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col col--4">
            <div className="card-demo margin-vert--sm">
              <div className="card">
                <div className="card__header">
                  <h3>OMEX</h3>
                </div>
                <div className="card__body">
                  <p>OMEX platform documentation and integration guides.</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary"
                    to="/docs/omex/intro">
                    Documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col col--4">
            <div className="card-demo margin-vert--sm">
              <div className="card">
                <div className="card__header">
                  <h3>Wave</h3>
                </div>
                <div className="card__body">
                  <p>Wave platform features and implementation guides.</p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--primary"
                    to="/docs/wave/guide">
                    Documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <DocumentationSection />
      </main>
    </Layout>
  );
}
