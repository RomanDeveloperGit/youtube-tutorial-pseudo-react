const NODE_TYPES_ERROR =
  'Expected virtual node, string, number, boolean, null or undefined.';

export const mount = (root, node) => {
  if (!document.contains(root)) {
    throw new Error('Document does not contain the element.');
  }

  if (Array.isArray(node)) {
    throw new Error(NODE_TYPES_ERROR);
  }

  if (typeof node === 'boolean' || node === null || node === undefined) {
    node = '';
  }

  if (typeof node === 'string' || typeof node === 'number') {
    root.append(node.toString());

    return;
  }

  if (typeof node !== 'object') {
    throw new Error(NODE_TYPES_ERROR);
  }

  try {
    const { type, props } = node;

    if (typeof type === 'function') {
      mount(root, type(props));

      return;
    }

    const element = document.createElement(type);

    const { children, ...propsWithoutChildren } = props;

    for (const prop in propsWithoutChildren) {
      if (!Object.hasOwnProperty.call(propsWithoutChildren, prop)) continue;

      const propValue = propsWithoutChildren[prop];

      if (prop === 'style') {
        for (const styleKey in propValue) {
          if (!Object.hasOwnProperty.call(propValue, styleKey)) continue;

          element[prop][styleKey] = propValue[styleKey];
        }
      } else {
        element[prop] = propValue;
      }
    }

    root.appendChild(element);

    for (const child of children.flat(Infinity)) {
      mount(element, child);
    }
  } catch (error) {
    console.error(error);
  }
};

const unmount = (root) => {
  root.replaceChildren();
};

export const domWorker = {
  mount,
  unmount,
};
