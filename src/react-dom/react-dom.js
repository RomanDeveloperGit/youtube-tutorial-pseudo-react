import { domWorker } from './dom-worker';

const roots = [];

const createRoot = (root) => {
  const newRootIndex = roots.push({ root }) - 1;

  return {
    render(virtualNode) {
      roots[newRootIndex].entryVirtualNode = virtualNode;

      domWorker.mount(root, virtualNode);
    },
    unmount() {
      roots[newRootIndex].entryVirtualNode = null;

      domWorker.unmount(root);
    },
  };
};

export const ReactDOM = {
  createRoot,
  roots,
};
