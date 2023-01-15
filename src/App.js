import { createContext } from 'react';

const DataContext = createContext();

function App() {
  const data = 'data007';

  return (
    <DataContext.Provider value={data}>
      <Child />
    </DataContext.Provider>
  );
}

export default App;

function Child() {
  return (
    <div>
      <ChildChild />
    </div>
  );
}

function ChildChild() {
  return (
    <DataContext.Consumer>
      {(data1) => <div>I am ChildChild: {data1}</div>}
    </DataContext.Consumer>
  );
}
