import React from 'react';
import { PageProvider } from './contexts/PageProvider';
import Header from './components/Header/Header';
import { ProductProvider } from './contexts/ProductProvider';
import Router from './utils/Router';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.StrictMode>
      <PageProvider>
        <Header />
        <ProductProvider>
          <Router/>
        </ProductProvider>
        {/* <Footer/> */}
      </PageProvider>
    </React.StrictMode>
  );
}

export default App;
