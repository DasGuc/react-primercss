import React, { Component } from 'react';
import classnames from 'classnames';
import { required, onlyOne, boolean, oneOf, string, any } from '../../utils/types';

export default class ButtonGroup extends Component {
  static propTypes = {
    children: required(any),
    className: string,
    style: string,
    primary: onlyOne(['primary', 'danger', 'outline'], boolean),
    danger: onlyOne(['primary', 'danger', 'outline'], boolean),
    outline: onlyOne(['primary', 'danger', 'outline'], boolean),
    disabled: boolean,
    small: boolean,
    tag: oneOf(['button', 'a'])
  }

  static childContextTypes = {
    groupPrimary: boolean,
    groupDanger: boolean,
    groupOutline: boolean,
    groupDisabled: boolean,
    groupSmall: boolean,
    groupTag: oneOf(['button', 'a']),
  }

  getChildContext() {
    return {
      groupPrimary: this.props.primary,
      groupDanger: this.props.danger,
      groupOutline: this.props.outline,
      groupDisabled: this.props.disabled,
      groupSmall: this.props.small,
      groupTag: this.props.tag
    };
  }

  render() {
    const { children, className, style } = this.props;
    const classes = classnames('btn-group', {
      [className]: className
    });

    return <div className={classes} style={style}>{children}</div>;
  }
}