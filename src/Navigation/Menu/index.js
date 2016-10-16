import React, { Component } from 'react';
import classnames from 'classnames';
import { required, any, number, string, object } from '../../utils/types';

import MenuHeader from '../Menu/MenuHeader';

export default class Menu extends Component {
  static propTypes = {
    children: required(any),
    className: string,
    style: object,
    width: number,
    header: string,
  }

  render() {
    const { children, className, style, width, header } = this.props;
    const classes = classnames('menu', {
      [className]: className
    });

    let renderStyle = {
      ...style
    };

    if (width) {
      renderStyle.width = width;
    }

    return (
      <nav className={classes} style={renderStyle}>
        {header && <MenuHeader>{header}</MenuHeader>}
        {children}
      </nav>
    );
  }
}