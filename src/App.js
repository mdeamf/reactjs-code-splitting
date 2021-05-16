import './App.css';
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./components/LazyComponent'));
    }, 1500);
  });
});

function App() {
  import('./libs/doingStuff').then((doingStuff) => {
    let sum = doingStuff.addTwoNumbers(1, 2);
    console.log('[doingStuff sum]', sum);

    doingStuff.logText('[doingStuff logText]');
  });

  return (
    <div className="App">
      <p>Testing!</p>

      <Suspense fallback={<p>Loading...</p>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
