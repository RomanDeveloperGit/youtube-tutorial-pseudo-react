const createElement = (type, props, ...children) => {
  if (typeof type !== 'string' && typeof type !== 'function') {
    throw new Error('Expected string or function.');
  }

  if (typeof props !== 'object' && props !== null) {
    throw new Error('Expected object or null.');
  }

  if (!props) props = {};

  props.children = children;

  return {
    $$typeof: Symbol('react.element'),
    type,
    props,
    key: null,
    ref: null,
  };
};

const React = {
  createElement,
};

export default React;
