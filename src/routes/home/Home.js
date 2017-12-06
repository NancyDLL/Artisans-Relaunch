/* small change */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

function Home({ news }) {
  return (
    <div className={s.root}>
      <div className={s.banner}>
        <h1 className={s.bannerTitle}>Artisans x2</h1>
        <p className={s.bannerDesc}>Facilitating a better contractor experience.</p>
      </div>
      <div className={s.container}>

      </div>

    </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};

export default withStyles(Home, s);
