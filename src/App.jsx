import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Suspense>
      <Home/> 
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
