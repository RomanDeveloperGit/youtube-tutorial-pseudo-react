import { React, ReactDOM } from '../src';

const TestComponent = (props) => {
  console.log('TestComponent', { props });

  return React.createElement(
    'div',
    {
      style: {
        border: '1px solid red',
        padding: '40px',
      },
      onclick: (event) => console.log('container', event),
    },
    React.createElement(
      'div',
      { className: 'main-case' },
      `Test component's props is: "${JSON.stringify(props)}"`,
      React.createElement(
        'div',
        {
          style: { marginRight: '20px' },
          onclick: (event) => console.log('test 1', event),
        },
        'test 1',
      ),
      React.createElement(
        'div',
        {
          style: { color: 'red' },
          onclick: (event) => console.log('test 2', event),
        },
        'test 2',
      ),
    ),
    React.createElement(
      'div',
      {
        className: 'corner-cases',
      },
      React.createElement('div', null, [[1, 2, 3, [4, [5]]], 6, 7]),
      React.createElement('div', null, true),
      React.createElement('div', null, false),
      React.createElement('div', null, null),
      React.createElement('div', null, undefined),
    ),
  );
};

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  React.createElement(
    TestComponent,
    {
      a: 1,
      b: 2,
      c: 3,
    },
    'Test children',
  ),
);

// setTimeout(() => {
//   console.log('unmount...');

//   root.unmount();
// }, 5000);
