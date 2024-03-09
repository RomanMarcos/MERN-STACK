import ReactDOM from 'react-dom/client';
import { Home } from './views/Home.jsx';
import { BrowserRouter } from "react-router-dom";
import { Router } from './router/Router.jsx';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Home />
        <Router />
    </BrowserRouter>
)
