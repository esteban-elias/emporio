import React from 'react';
import ProductPanel from './components/ProductPanel/ProductPanel';

function App() {
  return (
    <React.StrictMode>
      <ProductPanel />
    </React.StrictMode>
  );
}

export default App;

/**
 * To-do:
 *  - Import alias for types for better readability
 *  - Move the reducer outside ProductForm? (it's not used anywhere else)
 */