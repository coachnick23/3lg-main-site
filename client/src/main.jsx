import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

// Strip trailing slash so router basename is clean (Vite base is '/' or '/main/').
const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {import.meta.env.VITE_SINGLEFILE === '1' ? (
      <HashRouter><App /></HashRouter>
    ) : (
      <BrowserRouter basename={basename === '/' ? undefined : basename}>
        <App />
      </BrowserRouter>
    )}
  </StrictMode>,
);
