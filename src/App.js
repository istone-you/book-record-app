import './App.css';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

import BooksGroup from './components/layout/BooksGroup';
import CreateBooksGroup from './components/function/CreateBooksGroup';


Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {({ user, signOut }) => (
        <div className="App">
          <header className="App-header">
            <h1>こんにちは、{user.attributes.email}さん</h1>
            <h2>
              <button onClick={signOut}>
                Sign Out
              </button>
            </h2>
          </header>
          <BooksGroup />
          <CreateBooksGroup />
        </div>
      )}
    </Authenticator>
  );
}

export default App;
