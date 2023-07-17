import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tracking',
    image: require('@site/static/img/tracking.webp').default,
    description: (
      <>
        Automatically keep track of your manga with
        MyAnimeList, AniList, Kitsu, Shikimori, and Bangumi.
      </>
    ),
  },
  {
    title: 'Extensions',
    image: require('@site/static/img/library.webp').default,
    description: (
      <>
        Online and offline reading from over a
        thousand sources, including MangaDex.
      </>
    ),
  },
  {
    title: 'Customization',
    image: require('@site/static/img/reader.webp').default,
    description: (
      <>
        A configurable reader with multiple reading modes,
        custom color filters, and other settings.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={image} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
