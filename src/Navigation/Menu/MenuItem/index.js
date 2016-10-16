import React, { Component } from 'react';
import classnames from 'classnames';
import { required, any, oneOf, func, string, boolean, number, object } from '../../../utils/types';
import MenuCounter from '../MenuCounter';
import Octicon from '../../../Octicon';

export default class MenuItem extends Component {
  static propTypes = {
    children: required(any),
    className: string,
    style: object,
    href: string,
    onClick: func,
    selected: boolean,
    counter: number,
    icon: string
  }

  static defaultProps = {
    href: '#',
    onClick: () => {},
    selected: false
  }

  render() {
    const { children, className, style, href, onClick, selected, counter, icon } = this.props;
    const classes = classnames('menu-item', {
      selected,
      [className]: className
    });

    return (
      <a href={href} onClick={onClick} className={classes} style={style}>
        {icon && <Octicon name={icon} />}
        {counter && <MenuCounter value={counter} />}
        {children}
      </a>
    );
  }
}
