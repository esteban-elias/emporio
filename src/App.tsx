import React from 'react';
import { PageProvider } from './contexts/PageProvider';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.StrictMode>
      <PageProvider>
        <Header/>
        <Home />
        {/* <Footer/> */}
      </PageProvider>
    </React.StrictMode>
  );
}

export default App;
