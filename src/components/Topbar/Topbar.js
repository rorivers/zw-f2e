/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Topbar.css';
import placeholderImg from './img/topbar.jpg';

class Topbar extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <div className={s.imgWrapper}>
          <img src={placeholderImg} width="1120" height="37" alt="Topbar img" />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Topbar);
