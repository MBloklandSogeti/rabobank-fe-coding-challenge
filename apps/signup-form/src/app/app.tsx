import React from 'react';
import { Footer, Header, Main } from './components';
import { Signup } from '../signup/Signup';

export function App() {
  return (
    <>
      <Header />
      <Main>
        <Signup />
      </Main>
      <Footer />
    </>
  );
}

export default App;
