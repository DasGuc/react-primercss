import { PropTypes } from 'react';

export const required = (type) => {
  return type.isRequired;
}

export const onlyOne = (list, type) => (props, propName, componentName) => {
  const found = list.filter((item) => {
    return Object.keys(props).includes(item);
  });

  if (found.length > 1) {
    return new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Only one of `'+ list.join(', ') +'` must be passed at same time.' +
        ' Found `' + found.join(', ') + '`'
      );
  } else {
    // console.log(props[propName]);
  }
}

export const any = PropTypes.any;
export const boolean = PropTypes.bool;
export const bool = PropTypes.bool;
export const string = PropTypes.string;
export const oneOf = PropTypes.oneOf;
export const object = PropTypes.object;
export const func = PropTypes.func;
export const number = PropTypes.number;