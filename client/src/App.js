import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import drizzleOptions from './drizzleOptions';
import { Drizzle } from '@drizzle/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingContainer from './LoadingContainer';
import Header from './Header';
import Exchange from './Exchange';

const { DrizzleProvider } = drizzleReactHooks;
const drizzle = new Drizzle(drizzleOptions);

const App = () => {
  return (
    <DrizzleProvider drizzle={drizzle}>
      <LoadingContainer>
        <div style={{backgroundColor: "#D0F7F5"}}>
          <Header />
          <Exchange />
        </div>
      </LoadingContainer>
    </DrizzleProvider>
  );
};

export default App;
