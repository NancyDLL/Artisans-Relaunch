
/**
Questions for Stephen
Where is the best place to start?
1. html - components: navigation, login, footer, header, business panel, panel transition trigger
2. css
3. Data
4. Content - Lorem Ipsum
5. Clean up  License
How does the MIT license work? - All can delete all and is -searchability
Revise the file name? How to make sure it gets changed in all locations?
Feedback is not needed, how do I delete it?
**/

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';

function Navigation({ className }) {
  return (
    <div className={cx(s.root, className)} role="navigation">
      <Link className={s.link} to="/about">Find an Artisan</Link>
      <Link className={s.link} to="/contact">Review an Artisan</Link>
      <span className={s.spacer}> | </span>
      <Link className={s.link} to="/login">Log in</Link>
      <span className={s.spacer}>or</span>
      <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
    </div>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default withStyles(Navigation, s);
