import './App.css';

function App() {

  import("./libs/doingStuff").then(doingStuff => {
    let sum = doingStuff.addTwoNumbers(1, 2);
    console.log('[doingStuff sum]', sum);

    doingStuff.logText('[doingStuff logText]');
  });

  return (
    <div className="App">
      <p>Testing!</p>
    </div>
  );
}

export default App;
