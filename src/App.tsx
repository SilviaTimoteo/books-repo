import React from 'react';
import { Header } from './components/organisms/header';
import { Home } from './pages/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <Header />
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
              <Route path={'/'} element={<Home />}></Route>
              <Route path={'/page/:id'} element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
