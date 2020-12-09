import React from 'react';



function App() {
  function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    console.log(arg[2]);
    return arg;
  }
  
  function test(arg: number[]): number[] {
    console.log(arg.length);
    console.log(arg[4]);
    return arg;
  }
  
  function test2<T>(arg: T): T  {
    console.log(arg);
    return arg;
  }
  
  let test3 = test2({name: "nambui"});
  console.log(test3.name)
  
  
  
  return (
    <div className="App">
      <h1>Typescript Playground</h1>
    </div>
  );
}

export default App;
