import React from 'react';
import placeholderImg from './img/menu.jpg';
import s from './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className={s.root} role="menu">
        <div className={s.imgWrapper}>
          <img src={placeholderImg} width="220" height="787" alt="Menu img" />
        </div>
      </div>
    );
  }
}
