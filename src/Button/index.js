import React, { Component } from 'react';
import classnames from 'classnames';
import { required, onlyOne, any, boolean, string, number, object, oneOf, func } from '../utils/types';

export default class Button extends Component {
  static propTypes = {
    children: required(any),
    className: string,
    style: object,
    onClick: required(func),
    primary: onlyOne(['primary', 'danger', 'outline'], boolean),
    danger: onlyOne(['primary', 'danger', 'outline'], boolean),
    outline: onlyOne(['primary', 'danger', 'outline'], boolean),
    disabled: boolean,
    small: boolean,
    block: boolean,
    tag: oneOf(['button', 'a'])
  }

  static defaultProps = {
    tag: 'button'
  }

  render() {
    const {
      children,
      tag,
      disabled,
      primary,
      danger,
      outline,
      small,
      block,
      style,
      className,
      onClick
    } = this.props;

    const props = { style, onClick };
    const Tag = tag;
    const prefix = 'btn';

    const classes = classnames(prefix, {
      [`${prefix}-primary`]: primary,
      [`${prefix}-danger`]: danger,
      [`${prefix}-outline`]: outline,
      [`${prefix}-sm`]: small,
      [`${prefix}-block`]: block,
      ['disabled']: tag === 'a' ? disabled : false
    }, className);

    if (tag === 'button') {
      props.type = 'button';
      if (disabled) {
        props.disabled = true;
      }
    } else {
      props.href = '#';
      props.role = 'button';
    }

    return <Tag className={classes} {...props}>{children}</Tag>;
  }
}
