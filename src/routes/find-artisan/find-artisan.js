/* Notes x*/

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './find-artisan.scss';
import PanelTransTrigger from '../../components/PanelTransTrigger/PanelTransTrigger.js';

function FindArtisan({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Find an Artisan</h1>
        <div className={s.findForm}>
          <div className={s.btnBar}>
              <button className={s.btn1, s.btnText} type="button">All</button>
              <button className={s.btn2, s.btnText} type="button">Caterers &amp; Cooks</button>
              <button className={s.btn3, s.btnText} type="button">Hair Stylist &amp; Sellers</button>
              <button className={s.btn4, s.btnText} type="button">Tailors</button>
              <button className={s.btn5, s.btnText} type="button">Housekeepers</button>
              <button className={s.btn6, s.btnText} type="button">Electricians</button>
          </div>
          <div className={s.bizCatTitle}>
            <h2>Hair Stylist & Sellers</h2>
          </div>
          <div className={s.bizPanel}>
            <div className={s.biz1}>
              <h3>Make Me Beauty Place</h3>
              <h4>MAKE ME BEAUTY PLACE, is all about making women feel beautiful and men feel handsome.</h4>
              <h5>44, Bode Thomas Street, Surulene</h5>
            </div>
            <div className={s.biz2}>
              <h3>X-Pression</h3>
              <h4>X-Pression has been making hair products weave-on, braid, hair pieces in Africa since 1997.</h4>
              <h5>48 Iju Road, Agege</h5>
            </div>
            <div className={s.biz3}>
              <h3>Capelli Hair Salon</h3>
              <h4>Capelli Hair Salon is a total clinic, our services are: spa services, hair care, scalp massage, skin care, nail service, and make up.</h4>
              <h5>107 Opebi Road Ikeja</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

FindArtisan.propTypes = { title: PropTypes.string.isRequired };

export default withStyles(FindArtisan, s);
