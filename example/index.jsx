import { ReactDOM } from '@';

const TestComponent = (props) => {
  console.log('TestComponent', { props });

  return (
    <div
      style={{ border: '1px solid red', padding: '40px' }}
      onclick={(event) => console.log('container', event)}
    >
      <div className="main-case">
        Test component's props is: {JSON.stringify(props)}
        <div
          style={{ marginRight: '20px' }}
          onclick={(event) => console.log('test 1', event)}
        >
          test 1
        </div>
        <div
          style={{ color: 'red' }}
          onclick={(event) => console.log('test 2', event)}
        >
          test 2
        </div>
      </div>
      <div className="corner-cases">
        <div>{[[1, 2, 3, [4, [5]]], 6, 7]}</div>
        <div>{true}</div>
        <div>{false}</div>
        <div>{null}</div>
        <div>{undefined}</div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <TestComponent a={1} b={2} c={3}>
    Test children
  </TestComponent>,
);

console.log(
  <TestComponent a={112}>
    <div>1</div>
    <div>1</div>
    <div>1</div>
  </TestComponent>,
);
// <TestComponent /> -> React.createElement(TestComponent)

// setTimeout(() => {
//   console.log('unmount...');

//   root.unmount();
// }, 5000);
