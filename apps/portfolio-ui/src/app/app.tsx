import { useState } from 'react';
import { Child, Sibling } from './child';
import { ChildService, TestService, TestServiceContext } from './test.service';

export function App() {
  const [service] = useState(new TestService(new ChildService()));
  return (
    <TestServiceContext.Provider value={service}>
      <Child></Child>
      <Sibling></Sibling>
    </TestServiceContext.Provider>
  );
}

export default App;
