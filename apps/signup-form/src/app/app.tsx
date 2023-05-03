import React from 'react';
import { Header, Main } from './components';
import { Signup } from '../signup/Signup';

export function App() {
  return (
    <div>
      <Header />
      <Main>
        <Signup />
      </Main>
    </div>
  );
}

export default App;
