import React from 'react';

import AppProvider from './hooks';

import GlobalStyle from './styles/global';
// import SignUp from './pages/SignUp/index';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
