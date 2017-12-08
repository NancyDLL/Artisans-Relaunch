/* this is a change */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Register.scss';

function Login({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Welcome to Artisans!</h1>
        <form className={s.loginForm}>
          <label className={s.email}>Email</label>
          <input className={s.emailBox} type="email" placeholder="Enter your email" name="email" required />
          <label className={s.usrname}>Username</label>
          <input className={s.usrnameBox} type="text" placeholder="Create your Username" name="username" required />
          <label className={s.pssword}>Password</label>
          <input className={s.psswordBox} type="password" placeholder="Create your Password" name="password" required />
          <label className={s.repssword}>Repeat Password</label>
          <input className={s.repsswordBox} type="password" placeholder="Repeat the Password" name="repassword" required />
          <div className={s.btnContainer}>
            <button className={s.cancel} type="cancel">Cancel</button>
            <button className={s.sbmit} type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(Login, s);
