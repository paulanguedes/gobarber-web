import React from 'react';

import { AuthProvider } from './context/AuthContext';

import GlobalStyle from './styles/global';
// import SignUp from './pages/SignUp/index';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
