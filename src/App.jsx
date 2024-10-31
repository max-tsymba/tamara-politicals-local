import { Suspense } from 'react';

import AppProvider from './providers/AppProvider';
// import RouterProvider from './routes/Router';
import Version from './UI/Version/Version';

import './App.css';
import LandingLayout from 'layout/LandingLayout';

function App() {
  return (
    <AppProvider>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <RouterProvider /> */}
        <LandingLayout />
        <Version />
      </Suspense>
    </AppProvider>
  );
}

export default App;
