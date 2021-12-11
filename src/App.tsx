import React from 'react';
import './App.css';
import { AuthorizeApp } from './AuthorizeApp';
import { useAuth } from './context/auth-context';
import { UnauthorizeApp } from './UnauthorizeApp';

function App() {
  const {user} = useAuth();
  return (
    <div className="App">
      {
        user ? <AuthorizeApp /> : <UnauthorizeApp />
      }
    </div>
  );
}

export default App;
